const mongoose = require("mongoose");

const User = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        phone: {type: String, required: true},
        active: {type: Boolean, required: true},
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", User);