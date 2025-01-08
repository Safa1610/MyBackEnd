const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
      .connect(process.env.DB_URL)
      //.connect("mongodb://0.0.0.0:27017")
      .then(() => {
        console.log("connected to DB");
      })
      .catch((err) => {
        console.log(err);
        process.exit(1);
      });
  };
  
  module.exports = connectDB;
