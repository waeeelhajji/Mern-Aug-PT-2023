const NinjasControllers = require("../controllers/student.controller")

console.log(NinjasControllers)


module.exports = (app) => {
    app.get("/api/student", NinjasControllers.findAllNinjas)
    app.post("/api/student", NinjasControllers.createNewStudent)
    app.get("/api/music:id", NinjasControllers.findOneStudent)
    app.put("/api/music/:id", NinjasControllers.updateOneStudent)
    app.delete("/api/music/:id", NinjasControllers.deleteStudent)
}