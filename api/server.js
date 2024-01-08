const express = require('express');
const mongoose = require("mongoose");
const userRouer = require("../api/route/usersRoute")


require("dotenv").config();

const app = express();

//middleware
app.use(express.json());


//database connection
mongoose
.connect(process.env.Masuba_URI)
.then(()=> console.log("mongodb connect successfully"))
.catch((error)=> console.log("mongodb connection failed", error.message));

//routes
app.get("/", (req, res)=>{
    res.send("Welcome to my authentification app")
});
app.use("/api/user", userRouer);

app.listen(3030, (req, res)=>{
    console.log("The server is running on the port 3030" );
});