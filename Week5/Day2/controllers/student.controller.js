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
            res.json({ CreateStudent })
        })
        .catch(err => { res.json({ message: "wait a minute 😏😏 ", error: err }) })


}