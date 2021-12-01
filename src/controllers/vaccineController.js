const Vaccine = require("../models/Vaccine.js");

const sendErrorMessage = error => {
  res.status(500).send({ message: error.message })
};

const createVaccine = async (req, res) => {
  const { name, expected_date, vaccinated} = req.body;
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
      order: [['id', 'ASC']]
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

const getVaccine = async (req, res) => {
  const VaccineId = req.params.id;
  try {
    const vaccine = await Vaccine.findOne({
      where: { id: VaccineId },
    });
    if (VaccineId) {
      res.status(200).send(vaccine);
    } else {
      res
        .status(404)
        .send({ message: `Vacina não encontrado com o id ${VaccineId}` });
    }
  } catch (error) {
    sendErrorMessage(error);
  }
};

const updateVaccinated = async (req, res) => {
  const VaccineId = req.params.id;
  const vaccinated = req.body.vaccinated;
  try {
    const rowsUpdated = await Vaccine.update(
      { vaccinated },
      { where: { id: VaccineId } }
    );
    if (rowsUpdated && rowsUpdated[0] > 0) {
      res
        .status(200)
        .send({ message: `${rowsUpdated[0]} Vacina de ${VaccineId} atualizada com sucesso` });
    } else {
      res
        .status(404)
        .send({
          message: `Vacina com id ${VaccineId} não encontrado para atualizar informação `,
        });
    }
  } catch (error) {
    sendErrorMessage(error);
  }
};

module.exports = {
  createVaccine,
  getAllVaccine,
  getVaccine,
  updateVaccinated,
};
