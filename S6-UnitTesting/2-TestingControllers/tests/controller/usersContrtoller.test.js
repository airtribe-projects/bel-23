const usersController = require("../../src/controller/usersController");
const bcrypt = require('bcrypt');
const SALT_ROUND = 5;
const jwt = require('jsonwebtoken');
const usersModel = require("../../src/models/usersModel");

const mongoose = require('mongoose');

const {MongoMemoryServer} = require('mongodb-memory-server')



/* Hooks
- beforeEach 
- afterEach
- beforeAll
- afterAll
*/



describe('User Authentication Tests', () => {

    let mongoServer;


    beforeAll(async () => {
        // Create an in-memory MongoDB instance
        mongoServer = await MongoMemoryServer.create();
        const uri = await mongoServer.getUri();
        console.log(uri);
        // [IMP Step] Connect mongoose to the in-memory database
        try {
            await mongoose.connect(uri);
        } catch (e) {
            console.log(e);   
        }
        
    });


    afterAll(async () => {
        // Close the connection to the in-memory database
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    
    // Test for registerUser function
    describe('Test registerUser function', () => {
        it('should register a new user successfully with all fields', async () => {
            const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
            // const plainTextPassword = user.password;
            
            const dbUser = await registerUser(user);
            expect(dbUser).toHaveProperty("_id");
            expect(dbUser.name).toBe(user.name);
            expect(dbUser.email).toBe(user.email);
            expect(dbUser.role).toBe(user.role);
            expect(bcrypt.compareSync(user.password, dbUser.password)).toBe(true);
        })
    })
})
            


