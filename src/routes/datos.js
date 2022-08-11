const express = require("express");
const datosSchema = require("../models/datos");
var cors = require('cors')
const router = express.Router();
router.use(cors());
router.post("/datos", (req, res) => {
  const dato = datosSchema(req.body);
  dato
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.get("/datos", (req, res) => {
  datosSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
