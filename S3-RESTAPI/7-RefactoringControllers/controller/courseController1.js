const {courses} = require('../models/coursesModel');

const getAllCourses = (req, res) => {
    // logger(req)
    res.json(courses);
};

const getCourseById = (req, res) => {
    console.log("Business logic")
    const courseId = parseInt(req.params.courseId);
    const course = courses[courseId];
    if (!course) {
        return res.status(404).json({message: "The course that you are looking for is not here"});
    }
    res.json(course);
}

const createCourse = (req, res)=> {
    const body = req.body;
    body.id = courses.length;
    courses.push(body);
    // console.log(body);
    res.json(body);
    // res.json(courses);
}

module.exports = {getAllCourses, getCourseById, createCourse};