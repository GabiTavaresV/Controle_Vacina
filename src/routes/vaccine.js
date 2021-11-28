const express = require("express");
const router = express.Router();
const controller = require("../controllers/vacinneController.js");

router.get("/vaccines", controller.getAllVaccine);
router.post("/vaccines", controller.createVaccine);
router.get("/vaccines/:id", controller.getVaccine);
router.patch("/vaccines/:id/vaccinated", controller.updateVaccinated)


module.exports = router;
