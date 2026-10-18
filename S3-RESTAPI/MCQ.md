## Question 1
According to REST architectural constraints, which statement correctly distinguishes between `PUT` and `PATCH` methods for updating an existing resource?

A. `PUT` replaces the entire target resource representation and must be idempotent, while `PATCH` applies partial modifications and is not inherently guaranteed to be idempotent  
B. `PUT` applies partial updates and is non-idempotent, while `PATCH` replaces the entire resource and is idempotent  
C. Both `PUT` and `PATCH` must always replace the complete resource state and are strictly safe methods  
D. `PATCH` is idempotent and safe, whereas `PUT` is neither safe nor idempotent  


(A)


## Question 2
You need to design a RESTful API to retrieve active students enrolled in a specific course `1234`, sorted by enrollment date in descending order. Which endpoint design adheres best to REST conventions separating resource hierarchy from filtering and sorting?

A. `POST /api/v1/courses/1234/getEnrolledStudents?status=active&sort=desc`  
B. `GET /api/v1/courses/1234/students/active/sortedByDateDesc`  
C. `GET /api/v1/courses/1234/students?status=active&sort=-enrolledAt`  
D. `GET /api/v1/getStudentsByCourseId/1234?filter=active`  

(C)


## Question 3
When a client successfully creates a new course resource using `POST /api/v1/courses`, which HTTP status code and response header combination complies most strictly with REST standards?

A. Status `200 OK`
B. Status `201 Created` 
C. Status `204 No Content`
D. Status `202 Accepted`

(B)

## Question 4
Consider the following Express.js application code:

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('M1');
  next();
  console.log('M2');
});

app.use('/api', (req, res, next) => {
  console.log('M3');
  res.send('API Finished');
  console.log('M5');
});

app.use((req, res, next) => {
  console.log('M4');
  next();
});
```

When a client sends a `GET` request to `/api/v1/courses`, what is the exact output sequence printed to the server console?

A. `M1`, `M3`, `M4`, `M2`  
B. `M1`, `M2`, `M3`  
C. `M1`, `M3`  
D. `M1`, `M3`, `M5`, `M2`  


(D)


## Question 5
Consider the following route handler in an Express application:

```javascript
app.get('/api/v1/courses/:id', (req, res, next) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send('Course not found');
    // return;
  }
  res.json(course);
});
```

What occurs when a client requests a non-existent course ID (e.g., `GET /api/v1/courses/999`)?

A. The client receives a 404 response, but the Node.js server throws `Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client` because execution continues after `res.send()`  
B. Express automatically detects the 404 response, ignores `res.json(course)`, and cleanly finishes the request  
C. The request hangs indefinitely because `next()` was omitted  
D. The 404 response is overridden, and the client receives a 200 response with `null`  

## Question 6
An Express server mounts `app.use(express.json())`. A client sends a `POST` request with body `{"name":"Backend Launchpad"}`, but inside the route handler, `req.body` is unexpectedly `undefined`. What is the most likely cause?

A. The Express server was started without `--inspect-brk` enabled  
B. The route handler was defined using an arrow function instead of a `function` keyword  
C. The client omitted the request header `Content-Type: application/json` or specified an incompatible Content-Type  
D. `req.body` is only populated if the router has `{ mergeParams: true }` enabled  

(c)

## Question 7
An Express route is defined as:

```javascript
app.use((req, res, next) => {
    console.log({ params: req.params, query: req.query });
    next()
})

app.get('/api/v1/courses/:category', (req, res) => {
  res.json("Request received);
});
```

If a client sends an HTTP request `GET /api/v1/courses?category=backend&sort=asc`, what will be the value of `req.params` and `req.query`?

A. `req.params = { category: 'backend' }`, `req.query = { sort: 'asc' }`  
B. `req.params = { }`, `req.query = { category: 'backend', sort: 'asc' }`  
C. `req.params = { category: 'backend', sort: 'asc' }`, `req.query = {}`  
D. `req.params = {}`, `req.query = {}` (query strings are stripped when optional params are used)  

(B)

## Question 8
Given the following middleware and route registrations:

```javascript
app.use('/courses', (req, res, next) => {
  res.set('X-Custom-Header', 'Launchpad');
  next();
});

app.get('/courses', (req, res) => {
  res.send('Course List');
});
```

If a client sends a `GET /courses/123/ratings` request:

A. The middleware runs and sets the header, but the client receives a 404 `Cannot GET /courses/123/ratings` because `app.get('/courses')` requires an exact path match  
B. The middleware does not run because `app.use('/courses')` requires an exact URL match  
C. Express automatically rewrites `/courses/123/ratings` to `/courses` and responds with `Course List`  
D. The request triggers an infinite loop because no terminal response handler matched  

(A)


## Question 9
Consider the following Express route handler:

```javascript
app.get('/api/v1/test', (req, res) => {
  console.log('1: Handler Start');
  setTimeout(() => {
    console.log('2: Timer Callback');
  }, 0);
  Promise.resolve().then(() => {
    console.log('3: Microtask');
  });
  console.log('4: Handler End');
  res.send('Done');
});
```

When this endpoint receives a request, what is the exact console log output order according to the JavaScript Call Stack and Event Loop?

A. `1: Handler Start`, `2: Timer Callback`, `3: Microtask`, `4: Handler End`  
B. `1: Handler Start`, `4: Handler End`, `2: Timer Callback`, `3: Microtask`  
C. `1: Handler Start`, `4: Handler End`, `3: Microtask`, `2: Timer Callback`  
D. `1: Handler Start`, `3: Microtask`, `4: Handler End`, `2: Timer Callback`  

(C)