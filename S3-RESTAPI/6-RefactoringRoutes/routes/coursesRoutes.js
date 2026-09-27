// const coursesModel = require('../models/coursesModel');
const {courses} = require('../models/coursesModel');

// const courses = coursesModel.courses
const express = require('express');

// const router = require('express').Router;
const router = express.Router();

router.get('/', (req, res)=> {
    // logger(req)
    res.json(courses);
})


router.post('/',   (req, res)=> {
    const body = req.body;
    body.id = courses.length;
    courses.push(body);
    // console.log(body);
    res.json(body);
    // res.json(courses);
})



router.get('/:courseId', (req, res) => {
    console.log("Business logic")
    const courseId = parseInt(req.params.courseId);
    const course = courses[courseId];
    if (!course) {
        return res.status(404).json({message: "The course that you are looking for is not here"});
    }
    res.json(course);
})

module.exports = router;