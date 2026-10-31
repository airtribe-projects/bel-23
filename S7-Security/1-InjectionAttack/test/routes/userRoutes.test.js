const request = require("supertest");
const express = require("express");
const router = require("../../src/routes/usersRoute"); 
const { registerUser, loginUser } = require("../../src/controllers/usersController"); 

jest.mock("../../src/controllers/usersController");

const app = express();
app.use(express.json());
app.use(router); 

describe('User Authentication Routes', () => {

    describe('POST /register', () => {
        it('should successfully register a user', async () => {
            const user = {
                name: "John Doe",
                email: "john@example.com",
                password: "password123",
                role: "user"
            };
         
            registerUser.mockResolvedValue(user);

            const response = await request(app)
                .post('/register')
                .send(user)
                .expect(201);

            expect(response.body).toEqual(user);
            expect(registerUser).toHaveBeenCalledWith(user); 
        });

        it('should return an error if registration fails', async () => {
            const user = {
                name: "Jane Doe",
                email: "jane@example.com",
                password: "password123",
                role: "user"
            };

            // Mock the registerUser function to simulate an error
            registerUser.mockRejectedValue({message: "User registration failed"});

            const response = await request(app)
                .post('/register')
                .send(user)
                .expect(500); // Assuming server error status code

            expect(response.body.message).toBe("User registration failed");
        });
    });

    describe('POST /login', () => {
        it('should successfully log in a user and return a token', async () => {
            const user = {
                email: "john@example.com",
                password: "password123"
            };

            const token = "sample.jwt.token";

            loginUser.mockResolvedValue(token);

            const response = await request(app)
                .post('/login')
                .send(user)
                .expect(200);

            expect(response.body.token).toBe(token);
            expect(loginUser).toHaveBeenCalledWith(user.email, user.password); 
        });

        it('should return an error if login fails (user not found)', async () => {
            const user = {
                email: "nonexistent@example.com",
                password: "password123"
            };

            loginUser.mockRejectedValue(new Error("User not found"));

            const response = await request(app)
                .post('/login')
                .send(user)
                .expect(404);

            expect(response.body.message).toBe("User not found");
        });

        it('should return an error if login fails (invalid password)', async () => {
            const user = {
                email: "john@example.com",
                password: "wrongpassword"
            };

            loginUser.mockRejectedValue(new Error("Invalid Password"));

            const response = await request(app)
                .post('/login')
                .send(user)
                .expect(401);

            expect(response.body.message).toBe("Invalid Password");
        });
    });
});