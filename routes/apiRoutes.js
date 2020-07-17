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

router.post("/", (req, res) => {});

module.exports = router;
