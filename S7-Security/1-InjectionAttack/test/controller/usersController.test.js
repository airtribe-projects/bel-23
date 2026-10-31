const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
process.env.JWT_SECRET = "testSecret"; 
const usersModel = require("../../src/models/usersModel");
const { registerUser, loginUser } = require("../../src/controllers/usersController");

const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
});

beforeEach(async () => {
    await usersModel.deleteMany({});
});

describe('User Authentication Tests', () => {
    
    describe('registerUser', () => {
        it('should register a new user successfully with all fields', async () => {
            const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
            const plainTextPassword = user.password;
            
            const dbUser = await registerUser(user);

            expect(dbUser).toHaveProperty("_id");
            expect(dbUser.name).toBe(user.name);
            expect(dbUser.email).toBe(user.email);
            expect(dbUser.role).toBe(user.role);
            expect(bcrypt.compareSync(plainTextPassword, dbUser.password)).toBe(true); 
        });

        it('should throw an error if name is missing', async () => {
            const user = {
                email: "test2@example.com",
                password: "password123",
                role: "user"
            };
            await expect(registerUser(user)).rejects.toThrow("User validation failed: name: Path `name` is required.");
        });

        it('should throw an error if email is already in use', async () => {
            const user1 = {
                name: "John Doe",
                email: "duplicate@example.com",
                password: "password123",
                role: "user"
            };

            const user2 = {
                name: "Jane Doe",
                email: "duplicate@example.com", 
                password: "password456",
                role: "admin"
            };

            await registerUser(user1);

            await expect(registerUser(user2)).rejects.toThrow("E11000 duplicate key error collection");
        });

        it('should default role to "user" if role is not provided', async () => {
            const user = {
                name: "No Role User",
                email: "norole@example.com",
                password: "password123"
            };

            const dbUser = await registerUser(user);

            expect(dbUser.role).toBe("user"); 
        });
    });

    
    describe('loginUser', () => {
        test('should return an error when the user is not found', async () => {
            const email = "nonexistent@example.com";
            const password = "password123";

            await expect(loginUser(email, password)).rejects.toThrow("User not found");
        });


        test('should return an error when the password is incorrect', async () => {
            const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };

            await registerUser(user);

            const wrongPassword = "wrongpassword";

            await expect(loginUser(user.email, wrongPassword)).rejects.toThrow("Invalid Password");
        });

        test('should successfully login a user with correct credentials', async () => {
             const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };

            await registerUser(user);

            const token = await loginUser(user.email, user.password);

            expect(token).toBeDefined();
            const decoded = jwt.verify(token, JWT_SECRET);
            expect(decoded.email).toBe(user.email);
            expect(decoded.role).toBe(user.role);
        });
    });
});