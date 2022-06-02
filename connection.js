const mongoose = require('mongoose')
let mongoURI = ""

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost:27017/vinyl-api";
  }

mongoose.connect(mongoURI)
// mongoose.connect("mongodb://127.0.0.1/vinyl-api")

module.exports = mongoose