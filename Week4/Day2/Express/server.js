//!---Bring Express
const express = require("express")
// console.log(express)

//!--- invoke express

const app = express()

// console.log(app)

const PORT = 5000

//-- MIDDLEWARE --
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// req REQUEST
// res RESPONSE

app.get("/api", (req, res) => {
    res.send("OUR express Application is now sending this over the server with nodemon")
})

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

app.get("/api/user", (req, res) => {
    res.json(users)

})
app.get("/api/user/:id", (req, res) => {
    console.log(req.params.id)
    res.json(users[req.params.id])

})

app.post("/api/user", (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.json(users)
})


app.listen(PORT, () => {
    console.log(`the Server is running and loked and loaded on port ${PORT}`)
})
