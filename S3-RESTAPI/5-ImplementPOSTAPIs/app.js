require('dotenv').config();
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
// app.use(bodyParser);
app.use(express.json());

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

const logger =(req, res, next) => {
    console.log(`1: ${req.method}: Request received on url: ${req.url}`);
    next()
} 

app.use(logger);

app.get('/',(req, res, next) => {
    // logger(req)
    res.send("Hello World!");
})


app.get('/api/v1/courses',   (req, res)=> {
    // logger(req)
    res.json(courses);
})


app.post('/api/v1/courses',   (req, res)=> {
    const body = req.body;
    body.id = courses.length;
    courses.push(body);
    // console.log(body);
    res.json(body);
    // res.json(courses);
})



app.get('/api/v1/courses/:courseId', (req, res) => {
    console.log("Business logic")
    const courseId = parseInt(req.params.courseId);
    const course = courses[courseId];
    if (!course) {
        return res.status(404).json({message: "The course that you are looking for is not here"});
    }
    res.json(course);
})

// console.log(process.env);
const PORT = parseInt(process.env.PORT);
app.listen(PORT, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port ", PORT) 
    }
   
})