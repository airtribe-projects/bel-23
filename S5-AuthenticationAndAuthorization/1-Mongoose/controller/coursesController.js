const {courses} = require('../models/coursesModel');

const getAllCourses = () => {
    return courses;
};

const getCourseById = (courseId) => {
    const course = courses[courseId];
    if (!course) {
        throw new Error("Course Not Found");
    }
    return course;
}

const createCourse = (course)=> {
    course.id = courses.length;
    courses.push(course);
    return course;
}

module.exports = {getAllCourses, getCourseById, createCourse};