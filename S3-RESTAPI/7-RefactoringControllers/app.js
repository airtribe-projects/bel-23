require('dotenv').config();
const express = require('express');
const coursesRoute = require('./routes/coursesRoutes');
const {logger} = require('./middleware/loggerMiddleware');

// const bodyParser = require('body-parser');
const app = express();
// app.use(bodyParser);
app.use(logger);
app.use(express.json());
app.use("/api/v1/courses", coursesRoute); // OCP


app.get('/',(req, res, next) => {
    res.send("Hello World!");
})


// console.log(process.env);
const PORT = parseInt(process.env.PORT);
app.listen(PORT, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port ", PORT) 
    }
   
})