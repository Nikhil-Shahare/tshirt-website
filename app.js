const express = require("express")
const app = express();

//importing all the routes
const home = require("./routes/home")




//router middleware

app.use("/api/v1",home)


//export app.js
module.exports = app;

