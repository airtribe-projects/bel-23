const express = require('express');

const app = express();


const courses = [
    {
        id: 0,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 1,
        name: 'React.js',
        rating: 4.5,
        description: "Learn React js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 2,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    }
];

app.get('/', (req, res) => {
    res.send("Hello World!");
})


app.get('/api/v1/courses', (req, res) => {
    res.json(courses);
})

// Path Params
// app.get('/api/v1/courses/:courseId/students/:studentId', (req, res) => {

app.get('/api/v1/courses/:courseId', (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const course = courses[courseId];
    if (!course) {

        // return res.status(404).send("The course that you are looking for is not here");
        return res.status(404).json({message: "The course that you are looking for is not here"});
    }
    res.json(course);
})


// app.get('/api/v1/courses/0', (req, res) => {
//     res.json(courses[0]);
// })

// app.get('/api/v1/courses/1', (req, res) => {
//     res.json(courses[1]);
// })

// app.get('/api/v1/courses/2', (req, res) => {
//     res.json(courses[2]);
// })


// console.log("XYZ")

app.listen(3000, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port 3000") 
    }
   
})