const express = require("express");
const router = express.Router();
const controller = require("../controllers/vacinneController");

router.get("/vaccine", controller.getAllVaccine);
router.post("/vaccines", controller.createVaccine);
router.get("/vaccine/:id", contoller.getVaccine);
router.patch("/vaccine/:id/vaccinated", controller.updateVaccinated)


module.exports = router;
