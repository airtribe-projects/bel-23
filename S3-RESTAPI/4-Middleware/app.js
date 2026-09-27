const express = require('express');

const app = express();

// app.use

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

const logger2 =(req, res, next) => {
    console.log(`2: ${req.method}: Request received on url: ${req.url}`);
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

app.use(logger2);


/*
{
    status: "success",
    data: courses
    timeTaken: 20ms
    timestamp: UNIXTimestamp
}
*/


// Path Params
// let counter = 0;
app.get('/api/v1/courses/:courseId', (req, res) => {
    // counter++;
    // console.log(counter);
    console.log("Business logic")
    const courseId = parseInt(req.params.courseId);
    const course = courses[courseId];
    if (!course) {

        // return res.status(404).send("The course that you are looking for is not here");
        return res.status(404).json({message: "The course that you are looking for is not here"});
    }
    res.json(course);
})

app.listen(3000, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port 3000") 
    }
   
})