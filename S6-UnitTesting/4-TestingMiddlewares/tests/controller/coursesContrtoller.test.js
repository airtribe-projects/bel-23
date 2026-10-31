const coursesController = require("../../src/controller/coursesController");
const coursesModel = require("../../src/models/coursesModel");

jest.mock("../../src/models/coursesModel");

describe("Test getting all courses", () => {
    test("Test Mocking of Models", () => {
        const mockCourses = [
            { _id: "1", name: "Course 1" }, 
            { _id: "2", name: "Course 2" }
        ];

        coursesModel.find.mockReturnValue(mockCourses);

        const result = coursesController.getAllCourses();

        expect(result).toBe(mockCourses);
        expect(coursesModel.find).toHaveBeenCalledTimes(1)
    })
})


describe("Test get a course method", () => {
    it("Should return a course if found", () => {
        const mockCourse = { _id: "1", name: "Course 1" };

        coursesModel.findById = jest.fn().mockImplementation((id) => {
            return id === 3 ? mockCourse : null;
        })

        const result = coursesController.getCourseById("3");

        expect(result).toBe(mockCourse);
        expect(coursesModel.findById).toHaveBeenCalledWith(3);

    });


    it("Should throw an error if course not found",  () => {
        coursesModel.findById = jest.fn().mockImplementation((id) =>  {
            throw new Error("Course not found")
        });

        // const result = coursesController.getCourseById("3");

        expect(() => coursesController.getCourseById("3")).toThrow("Course not found");
        expect(coursesModel.findById).toHaveBeenCalledTimes(1);
    })
})


describe("Test creation of a course", () => {
    it("should create and return a new course",  () => {
        const mockCourse = { name: "New Course" };
        const savedCourse = { _id: "3", ...mockCourse };

        coursesModel.create.mockReturnValue(savedCourse);
        const result =  coursesController.createCourse(mockCourse);

        expect(result).toBe(savedCourse);
        expect(coursesModel.create).toHaveBeenCalledWith(mockCourse);
    })
})


    




