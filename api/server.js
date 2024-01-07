const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//middleware



//database connection
mongoose
.connect(process.env.Masuba_URI)
.then(()=> console.log("mongodb connect successfully"))
.catch((error)=> console.log("mongodb connection failed", error.message));

//routes
app.get("/", (req, res)=>{
    res.send("Welcome to my authentification app")
});

app.listen(3030, (req, res)=>{
    console.log("The server is running on the port 3030" );
});