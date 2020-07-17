const mongoose = require("mongoose");
const TodoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.Model("Todo", TodoSchema);
