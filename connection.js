const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/vinyl-api")
// mongoose.connect("mongodb://127.0.0.1/vinyl-api")

module.exports = mongoose