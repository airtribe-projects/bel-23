<!-- Design a Course Rating Service -->
- GET the List of all the courses
- Create a course
- GET a specific course
- Update a course with specific details
- Get all students associated with a course
- Adds a rating to a specified course


ServiceName: api
# GET the List of all the courses

GET /api/v1/courses

1. /api/v1/courses (GET)
2. GET /courses
3. GET /v1/courses
4. api/v1/getCourse
5. api/v1/getCourseList ()
6. GET /api/v1/course


# GET a specific course
1. GET api/v1/courses/{id}
2. GET api/v1/courses/:id
3. GET /api/v1/courses/{courseId}

Don't
2. GET api/v1/courses/id


# Create a course
1. POST /api/v1/courses (body)

Also talk about body


# Update a course with specific details
1. PUT api/v1/courses/:id (body).    --> Replacing the entire resource
2. PATCH /api/v1/courses/{id}  {body} --> Partial Update (updating a subset of fields)


# Get all students associated with a course
1. GET /api/v1/courses/{id}/students
2. GET /api/v1/students?courseId={courseId} ==> optional parameters
