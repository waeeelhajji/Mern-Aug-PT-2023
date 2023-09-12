// import mongoose to build our Model

const { mongoose } = require("mongoose");



const Student = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "the name of the Student is required"]
    },
    age: {
        type: Number,
        required: [true, "the Age of the Student is required"],
        min: [18, 'age must be bigger than 18'],
        max: [70, 'age must be less than 70']
    },
    Belt: {
        type: String,
        required: [true, "the Belt of the Student is required"],
        minlength: [5, "Minimum of the Belt of the must be bigger than 5 characters"]
    }
})

module.exports.StudentSchema = mongoose.model("StudentSchema", Student)

