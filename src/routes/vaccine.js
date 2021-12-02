const express = require("express");
const router = express.Router();
const controller = require("../controllers/vaccineController.js");

router.get("/vaccines", controller.getAllVaccine);
router.post("/vaccines", controller.createVaccine);
router.get("/vaccines/:id", controller.getVaccineId);
router.patch("/vaccines/:id/vaccinated", controller.updateVaccinated)


module.exports = router;
