//importer express
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const userRouter = require("./routers/userrouter");
// Require the cloudinary library
const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});


//create server
const server = express();
connectDB();

server.use(cors());
server.use(express.json());
server.use("/api/users", userRouter);

server.listen(3000, () => {
    console.log("listening to port 3000");
});