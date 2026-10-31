const request = require('supertest');
const mongoose = require('mongoose');
// Step 1: Very important to load the environment variables as these are used at multiple places. Also emphasise that this line should be before any code imports
// It always picks up the .env file in the root directory.
require('dotenv').config({ path: './.env' });

const { MongoMemoryServer } = require('mongodb-memory-server');

// Step 2: Need the instance of app. The app as of now is coupled with the db instance. 
// Ideally they should be decoupled.
// Let's do this.
const app = require('../../src/app'); 
const Course = require('../../src/models/coursesModel');
const jwt = require('jsonwebtoken');

let mongoServer;
let adminToken, userToken;

// Step 3: Least mocking. We need things in place to test the integration.
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());

    // Create admin and user
    const adminUser = { name: 'Admin User', email: 'admin@example.com', password: 'password123', role: 'admin' };
    const normalUser = { name: 'Normal User', email: 'user@example.com', password: 'password123', role: 'user' };

    // Register an admin and a normal user
    await request(app)
        .post('/api/v1/users/register')
        .send(adminUser);
    await request(app)
        .post('/api/v1/users/register')
        .send(normalUser);

    // Login to get tokens
    const adminLoginResponse = await request(app)
        .post('/api/v1/users/login')
        .send({ email: 'admin@example.com', password: 'password123' });

    const userLoginResponse = await request(app)
        .post('/api/v1/users/login')
        .send({ email: 'user@example.com', password: 'password123' });

    // console.log(adminLoginResponse.body, userLoginResponse.body)

    adminToken = adminLoginResponse.body.token;
    userToken = userLoginResponse.body.token;
});

beforeEach(async () => {
    await Course.deleteMany(); // Clear data before each test
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('Courses API Integration Tests', () => {

    // test('GET /courses - should return an empty list initially', async () => {
    //     const response = await request(app).get('/v1/courses').expect(200);
    //     expect(response.body).toEqual([]);
    // });

    test('POST /courses - should allow admin to create a course', async () => {
        const newCourse = { name: 'Machine Learning', rating: 5, difficulty: 'Advanced', price: 199 };
        // console.log(adminToken);
        const response = await request(app)
            .post('/api/v1/courses')
            .set('Authorization', adminToken)
            .send(newCourse)
            .expect(200);

        expect(response.body).toMatchObject(newCourse);

        const courses = await Course.find();
        expect(courses.length).toBe(1);
        expect(courses[0].name).toBe('Machine Learning');
    });

    test('POST /courses - should deny access to non-admin users', async () => {
        const newCourse = { name: 'Web Development', rating: 4, difficulty: 'Intermediate', price: 99 };

        const response = await request(app)
            .post('/api/v1/courses')
            .set('Authorization', userToken)
            .send(newCourse)
            .expect(401);

        expect(response.body).toEqual({ message: "Admin privilges required" });

        const courses = await Course.find();
        expect(courses.length).toBe(0);
    });

    test('GET /courses/:id - should return a course by ID', async () => {
        const course = await Course.create({ name: 'Python Basics', rating: 5, difficulty: 'Beginner', price: 49 });

        const response = await request(app)
            .get(`/api/v1/courses/${course.id}`)
            .expect(200);

        expect(response.body.name).toBe('Python Basics');
    });

    // Delibrate error: Error at the model layer which was not handled in the controller
    // test('GET /courses/:id - should return 404 if course is not found', async () => {
    //     const fakeId = 908098989;
        
    //     const response = await request(app)
    //         .get(`/api/v1/courses/${fakeId}`)
    //         .expect(404);

    //     expect(response.body).toEqual({ message: "Course not found" });
    // });
});