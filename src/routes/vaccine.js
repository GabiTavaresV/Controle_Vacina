const express = require("express");
const router = express.Router();
const controller = require("../controllers/vacinneController");

router.post("/", controller.createVaccine);
router.get("/", controller.getAllVaccine);

module.exports = router;
