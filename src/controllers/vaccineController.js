const Vaccine = require("../models/Vaccine.js");

const sendErrorMessage = (error) => {
  res.status(500).send({ message: error.message });
};

const createVaccine = async (req, res) => {
  const { name, expected_date, vaccinated } = req.body;
  try {
    const vaccine = await Vaccine.create({ name, expected_date, vaccinated });
    console.log(`Vacina ${vaccine.name} criada com sucesso!`);
    res.status(201).send(vaccine);
  } catch (error) {
    sendErrorMessage(error);
  }
};

const getAllVaccine = async (req, res) => {
  const vaccinated = req.query.vaccinated;
  try {
    const where = vaccinated ? { where: { vaccinated } } : {};
    const vaccine = await Vaccine.findAll({
      where,
      order: [["id", "ASC"]],
    });
    if (vaccine && vaccine.length > 0) {
      res.status(200).send(vaccine);
    } else {
      res.status(204).send();
    }
  } catch (error) {
    sendErrorMessage(error);
  }
};

const getVaccineId = async (req, res) => {
  const vaccineId = req.params.id;
  try {
    const vaccine = await Vaccine.findOne({
      where: { id: vaccineId },
    });

    vaccine != undefined
      ? res.status(200).send(vaccine)
      : res
          .status(404)
          .send({ message: `Vacina de ID ${vaccineId} não encontrada` });
  } catch (error) {
    sendErrorMessage(error);
  }
};

const updateVaccinated = async (req, res) => {
  const vaccineId = req.params.id;
  const vaccinated = req.body.vaccinated;
  try {
    const rowsUpdated = await Vaccine.update(
      { vaccinated },
      { where: { id: vaccineId } }
    );

    rowsUpdated && rowsUpdated > 0
      ? res
          .status(200)
          .send({
            message: `${rowsUpdated[0]} Vacina de ${vaccineId} atualizada com sucesso`,
          })
      : res
          .status(404)
          .send({
            message: `${rowsUpdated[0]} Vacina de ${vaccineId} atualizada com sucesso`,
          });
  } catch (error) {
    sendErrorMessage(error);
  }
};

module.exports = {
  createVaccine,
  getAllVaccine,
  getVaccineId,
  updateVaccinated,
};
