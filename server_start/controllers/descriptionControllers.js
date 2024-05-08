const descriptionModel = require("../models/descriptionModel");

async function getDescriptionById(req, res) {
    const { id } = req.params;

    try {
        const description = await descriptionModel.getDescriptionById(id);
        res.status(200).json(description);
        console.log('description', description)
    } catch (err) {
        res.status(500).send('sos gilipollas en description Controller ');
        console.log('This is an error in create user by id', err);
    }
}

async function createDescription(req, res) {
    const { description, prescription } = req.body;
    const { user_id } = req.params;

    try {
        const newDescription = await descriptionModel.createDescription(description, prescription, user_id);
        res.json(newDescription);
    } catch (err) {
        res.status(500).send('Mal pedo creando un description');
        console.log('Error in create user', err);
    }
}


module.exports = { getDescriptionById, createDescription };