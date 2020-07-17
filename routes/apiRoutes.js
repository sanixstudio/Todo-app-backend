const express = require("express");
const router = express.Router();
const Todo = require("../model/Todo");

// get all todos in the database
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find({});
        if (!todos)
            res.status(400).json({ msg: "Something went wrong, bad request" });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// save new to-do item to database
router.post("/add", async (req, res) => {
    const { text, isCompleted } = req.body;
    const newTodo = new Todo({ text, isCompleted });

    try {
        const todo = await newTodo.save();
        if (!todo)
            return res
                .status(400)
                .json({ msg: "Something went wrong, bad request" });
        res.status(200).json({ msg: "Saved successfully" });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// update to-do item
router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const todoItem = await Todo;
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// delete to-do item
router.delete("/delete/:id", async (req, res) => {
    try {
        const removedTodoItem = await Todo.findByIdAndRemove({
            _id: req.params.id,
        });
        if (!removedTodoItem)
            return res.status(400).json({ msg: "Invalid ID" });
        res.json({ msg: "Todo item removed" });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;
