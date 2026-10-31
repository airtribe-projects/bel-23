require('dotenv').config(); 

const express = require("express");
const mongoose = require('mongoose');
const path = require('path');

const coursesRouter = require('./routes/coursesRoute');
const usersRouter = require('./routes/usersRoute');
const adminRouter = require('./routes/adminRoute');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

app.use(express.json());
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/admin", adminRouter);

// Serve HTML UI exclusively on /admin
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get("/", (req, res) => res.send("Simple course rating service"));
app.get("/health", (req, res) => res.send("Simple course rating service"));

const startServer = async () => {
    try {
        // await mongoose.connect(MONGODB_URI);
        // console.log("Connected to MongoDB!");

        app.listen(PORT, () => {
            console.log("Server running on port:", PORT);
        }).on('error', (e) => console.error("Server error:", e));
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

// Start server when executed directly (node src/app.js)
if (require.main === module) {
    console.log("MONGODB_URI:", MONGODB_URI);
    console.log("PORT:", PORT);
    startServer();
}

module.exports = app;
