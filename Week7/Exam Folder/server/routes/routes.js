const NotesController = require("../controllers/controller")

console.log(NotesController)


module.exports = (app) => {
    app.get("/api/notes", NotesController.findAllNotes)
    app.post("/api/notes", NotesController.createNewNotes)
    app.get("/api/notes/:id", NotesController.findOneNote)
    app.put("/api/notes/:id", NotesController.updateOneNote)
    app.delete("/api/notes/:id", NotesController.deleteNote)
}