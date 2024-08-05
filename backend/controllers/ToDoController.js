const ToDoModel = require("../models/ToDoModel")

// Get
const getToDos = async (req, res) => {
    try {
        const { email } = req.body
        const toDos = await ToDoModel.find({ email });
        res.send(toDos)
    } catch {
        res.status(400).json({ msg: "Error" })
    }
}
module.exports.getToDos = getToDos

// Save
const saveToDo = async (req, res) => {
    try {
        const { toDo, email } = req.body
        ToDoModel.create({ toDo, email }).then((data) => {
            console.log("Saved...");
            res.status(201).send(data);
        })
    } catch (error) {
        console.log(error)
        res.send({ error: error, msg: "Something went wrong..." }).json({ msg: "Error" })
    }
}
module.exports.saveToDo = saveToDo