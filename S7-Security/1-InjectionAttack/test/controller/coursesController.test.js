const coursesController = require("../../src/controllers/coursesController");
const coursesModel = require("../../src/models/coursesModel");

jest.mock("../../src/models/coursesModel");

describe("Courses Controller", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("getAllCourse", () => {
        it("should return all courses", async () => {
            const mockCourses = [{ _id: "1", name: "Course 1" }, { _id: "2", name: "Course 2" }];
            coursesModel.find.mockResolvedValue(mockCourses);

            const result = await coursesController.getAllCourse();      
            expect(result).toEqual(mockCourses);
            expect(coursesModel.find).toHaveBeenCalledTimes(1);
        });
    });

    describe("getACourse", () => {
        it("should return a course if found", async () => {
            const mockCourse = { _id: "1", name: "Course 1" };
            coursesModel.findById = jest.fn().mockImplementation((id) => {
                return id === 1 ? mockCourse : null;
            }); 

            const result = coursesController.getACourse(1);

            expect(result).toEqual(mockCourse);
            expect(coursesModel.findById).toHaveBeenCalledWith(1);
        });

        it("should throw an error if course not found", async () => {
            coursesModel.findById = jest.fn().mockImplementation((id) =>  {
                throw new Error("Course not found")
            });
                       
            expect(() => coursesController.getACourse("999")).toThrow("Course not found");
            expect(coursesModel.findById).toHaveBeenCalledWith(999);       
        });

        it("should throw an error if database query fails", async () => {
            coursesModel.findById = jest.fn().mockImplementation(() => {
                throw new Error("DB Error")
            }); 

            expect(() => coursesController.getACourse(500)).toThrow();
            expect(coursesModel.findById).toHaveBeenCalledWith(500);
        });
    });

    describe("createACourse", () => {
        it("should create and return a new course", async () => {
            const mockCourse = { name: "New Course" };
            const savedCourse = { _id: "3", ...mockCourse };
            coursesModel.create.mockResolvedValue(savedCourse);

            const result = await coursesController.createACourse(mockCourse);

            expect(result).toEqual(savedCourse);
            expect(coursesModel.create).toHaveBeenCalledWith(mockCourse);
        });
    });
});