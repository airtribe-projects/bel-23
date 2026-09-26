const express = require('express');

const app = express();

// a


console.log("XYZ")

app.listen(3000, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port 3000") 
    }
   
})