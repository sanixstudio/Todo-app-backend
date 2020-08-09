const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Todo", todoSchema);
