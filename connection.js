const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/vinyl-api")
// mongoose.connect("mongodb://127.0.0.1/vinyl-api")

module.exports = mongoose