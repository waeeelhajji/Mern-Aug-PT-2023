const { StudentSchema } = require("../models/student.model")


//!-------- CRUD

//? Read All


module.exports.findAllNinjas = (req, res) => {
    // db.Student.find()
    StudentSchema.find()
        .then((AllNinjas) => {
            res.json({ AllNinjas })
        })
        .catch(err => { res.json({ message: "wait a minute 😏😏" }) })
}

//? CREATE
module.exports.createNewStudent = (req, res) => {
    //db.student.insertOne({singer:dffddf})
    StudentSchema.create(req.body)
        .then(CreateStudent => {
            console.log(CreateStudent)
            res.status(200).json({ CreateStudent })
        })
        .catch(err => { res.status(400).json(err) })


}

// Find One

module.exports.findOneStudent = (req, res) => {
    // api/Student/:id
    Spotify.findOne({ _id: req.params.id })
        .then(oneStudent => res.json({
            oneStudent
        })
        ).catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}

// Update
module.exports.updateOneStudent = (req, res) => {
    Spotify.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedStudent => { res.json({ updatedStudent: updatedStudent }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}
// Delete

module.exports.deleteStudent = (req, res) => {
    Spotify.deleteOne({ _id: req.params.id })
        .then(result => { res.json({ result }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}
