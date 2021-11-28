const Vaccine = require("./models/Vaccine.js");

const createVaccine = async (req, res) => {
    const { name, expected_date, vaccinated} = req.body
    try{
        const vaccine = await Vaccine.create({name, expected_date, vaccinated });
        console.log(`Vacina ${vaccine.name} criada com sucesso!`);
        res.status(201).send(vaccine)
    } catch(error){
        res.status(500).send({ message: error.message})
    }
};

const getAllVaccine = async (re, res) => {
    const vaccinated = req.query.vaccinated 
        try{
            const where = vaccinated ? { where: { vaccinated}} :{}
            const vaccine = await Vaccine.findAll(where)
            if (vaccine && vaccine.length > 0){
                res.status(200).send(vaccine)
            } else {
                res.status(204).send()
            }
            } catch (error) {
                res.status(500).send({ message: error.message})
            }
        }
   
module.exports = {
    createVaccine,
    getAllVaccine,
}