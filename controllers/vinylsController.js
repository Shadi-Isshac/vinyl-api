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

module.exports = router;