const { NotesSchema } = require("../models/model")


//!-------- CRUD

//? Read All


module.exports.findAllNotes = (req, res) => {

    NotesSchema.find()
        .then((AllNotes) => {
            res.json(AllNotes)
        })
        .catch(err => { res.status(400).json(err) })
}

//? CREATE
module.exports.createNewNotes = (req, res) => {
    NotesSchema.create(req.body)
        .then(CreateNote => {
            console.log(CreateNote)
            res.status(200).json({ CreateNote })
        })
        .catch(err => { res.status(400).json(err) })


}

// Find One

module.exports.findOneNote = (req, res) => {

    NotesSchema.findById(req.params.id)
        .then(oneNote => res.json(oneNote)
        ).catch(err => { res.status(400).json(err) })
}

// Update
module.exports.updateOneNote = (req, res) => {
    NotesSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedNote => { res.json(updatedNote) })
        .catch(err => { res.status(400).json(err) })
}
// Delete

module.exports.deleteNote = (req, res) => {
    NotesSchema.findByIdAndDelete(req.params.id)
        .then(result => { res.json(result) })
        .catch(err => { res.status(400).json(err) })
}
