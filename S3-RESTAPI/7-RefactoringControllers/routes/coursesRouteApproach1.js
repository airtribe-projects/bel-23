// const coursesModel = require('../models/coursesModel');
const {courses} = require('../models/coursesModel');

// const courses = coursesModel.courses
const express = require('express');

// const router = require('express').Router;
const router = express.Router();

const {getAllCourses, getCourseById, createCourse} = require('../controller/coursesController1');


router.get('/', getAllCourses)
router.post('/',   createCourse)
router.get('/:courseId', getCourseById)

module.exports = router;