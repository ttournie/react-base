var request = require('request-promise');
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
var apiResponse = null;
var get = "";



/////////////////////////////////////////////
// ALLOW CORS TO localhost:3000 dev server
/////////////////////////////////////////////
const allowCrossDomain = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
}
/////////////////////////////////////////////
// APP CONFIGURATION
/////////////////////////////////////////////
app.use(allowCrossDomain);


app.get("/", (req, res) => {
  res.send('start page')
});

app.listen(port);
console.log("Server started");
