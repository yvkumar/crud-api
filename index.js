var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var server = require("http").createServer(app);
const dotenv = require('dotenv').config();

server.on('error', function (e) {
    console.log("Error occured")
    // do your thing
  });
// 
server.listen(process.env.APPLICATION_PORT, function () {
    console.log("Backend Server Stared Successfully!!")
});
// 
app.get("/", function (req, res) {
    res.send("Welcome to My Backend !!!");
})