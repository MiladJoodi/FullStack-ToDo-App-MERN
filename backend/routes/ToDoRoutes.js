const { Router } = require("express");
const { getToDos, saveToDo } = require("../controllers/ToDoController");

const router = Router();

router.post("/get", getToDos);
router.post("/save", saveToDo)

module.exports = router;