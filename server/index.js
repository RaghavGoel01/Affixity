const express = require('express');
const mongoose = require('mongoose');
const port = 3000;

const app = express();

app.use(express.urlencoded({
    extended: true
}));







app.get("/", function(req,res){
    res.send("Server working properly.!")
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });