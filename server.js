// Require in dependencies
require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const vinylsController = require('./controllers/vinylsController')
const cors = require("cors");
// Define port
const PORT = process.env.PORT

// Create express app
const app = express()

// middleware to accept json data
app.use(express.json())

// Use logger middleware
app.use(logger('dev'));

//Use Cors
app.use(cors())

// Vinyls routes
app.use('/vinyls', vinylsController)

// Start app on port
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
