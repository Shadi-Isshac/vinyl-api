const express = require("express");
const Vinyl = require('./../models/Vinyl')

const router = express.Router();

// GET /vinyls
router.get('/', function (req, res) {
    // Find all the vinyls
    Vinyl.find()
        // Return vinyls as json
        .then(vinyls => res.status(200).json({vinyls: vinyls}))
})

// POST route to vinylsController
router.post("/", (req, res) => {
    const data = req.body 
    Vinyl.create(data)
        .then((vinyl) => res.status.(201).json({vinyl: vinyl}))
})

module.exports = router;