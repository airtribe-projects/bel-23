
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log({ params: req.params, query: req.query });
    next()
})

app.get('/api/v1/courses/:category', (req, res) => {
  res.json("Request received");
});


app.listen(3000);