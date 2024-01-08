const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    }, 
    password:{
        type: String,
        required: true,
        minlength: true,
    }
},
{
    timestamps: true,
}
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;