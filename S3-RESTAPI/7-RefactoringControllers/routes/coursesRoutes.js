const express = require('express');
const router = express.Router();

const {getAllCourses, getCourseById, createCourse} = require('../controller/coursesController');

router.get('/', (req, res) => {
    const courses = getAllCourses()
    res.json(courses);
})

router.post('/',   (req, res) => {
    const body = req.body;
    const course = createCourse(body);
    res.json(course)
})

router.get('/:courseId', (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const course = getCourseById(courseId);
    res.json(course);
})

module.exports = router;