// import mongoose to build our Model

const { mongoose } = require("mongoose");



const Notes = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, "the Title of the Notes is required"]
    },
    Content: {
        type: String,
        required: [true, "the Content of the Notes is required"],
        minLength: [10, 'Content be more 10 characters'],
    },
    isComplete: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


module.exports.NotesSchema = mongoose.model("NotesSchema", Notes)

