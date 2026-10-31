const courses = require("../models/coursesModel");

const getAllCourses =  () => {
    // let dbCourses;

    // for (let i=0; i< 100; i++) {
    //     dbCourses = courses.find();
    // }
    
    // return dbCourses;
    return courses.find();
}

const getCourseById =  (courseId) => {
    const course = courses.findById(parseInt(courseId));
    return course;
}

const createCourse =   (course) => {
    return courses.create(course);;
}

// module.exports = {getAllCourses, getACourse, createACourse};
module.exports = {getAllCourses, getCourseById, createCourse};