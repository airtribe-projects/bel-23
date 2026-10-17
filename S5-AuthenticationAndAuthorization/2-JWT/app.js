require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const coursesRoute = require('./routes/coursesRoutes');
const usersRoute = require('./routes/usersRoutes');

const {logger} = require('./middleware/loggerMiddleware');


const app = express();
app.use(logger);
app.use(express.json());
app.use("/api/v1/courses", coursesRoute); // OCP
app.use("/api/v1/users", usersRoute); // OCP


app.get('/',(req, res, next) => {
    res.send("Hello World!");
})


// console.log(process.env);

// Bootstraping process
const PORT = parseInt(process.env.PORT);
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Server is running on port ", PORT) 
        }
   
    })
});

