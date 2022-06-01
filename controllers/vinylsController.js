   
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

// POST /vinyls
router.post('/', function(req, res) {
    // get new vinyl data from body of request
    const data = req.body
    // save vinyl to db
    Vinyl.create(data)
        // return vinyl as json
        .then((vinyl => res.status(201).json({vinyl: vinyl})))
})

// GET /vinyls/:id
router.get('/:id', function(req, res){
    // get id from params
    const id = req.params.id
    // find vinyl by id
    Vinyl.findById(id)
        // return vinyl as json
        .then(vinyl => res.status(200).json({vinyl: vinyl}))
})

// DELETE / vinyls/:id
router.delete('/:id', function(req, res){
    // get id from params
    const id = req.params.id
    // find and delete by id
    Vinyl.findByIdAndDelete(id)
        .then(() => res.sendStatus(204))
})

router.patch('/:id', function(req,res) {
    // get id from params
    const id = req.params.id
    // get new vinyl data from body of request
    const data = req.body
    Vinyl.findByIdAndUpdate(id, data, {new: true})
        .then(vinyl => res.status(200).json({vinyl: vinyl}))
})


module.exports = router;