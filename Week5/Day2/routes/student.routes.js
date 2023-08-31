const NinjasControllers = require("../controllers/student.controller")

console.log(NinjasControllers)


module.exports = (app) => {
    app.get("/api/student", NinjasControllers.findAllNinjas)
    app.post("/api/student", NinjasControllers.createNewStudent)


}