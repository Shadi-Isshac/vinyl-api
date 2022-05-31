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

// Creates new vinyl
router.post("/", (req, res) => {
    const data = req.body;
    Vinyl.create(data).then((vinyl) => res.status(201).json({ vinyl: vinyl }));
  });
  // Search vinyl by id
  router.get("/:id", (req, res) => {
    Vinyl.findById(req.params.id).then((vinyl) => {
      res.json({ data: vinyl });
    });
  });
  // deletes vinyl
  router.delete("/:id", (req, res) => {
    Vinyl.findByIdAndDelete(req.params.id).then((vinyl) => {
      res.json({ data: vinyl });
    });
  });
  // updates vinyl
  router.patch("/:id", (req, res) => {
    Vinyl.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (vinyl) => {
        res.json({ data: vinyl });
      }
    );
  });

module.exports = router;