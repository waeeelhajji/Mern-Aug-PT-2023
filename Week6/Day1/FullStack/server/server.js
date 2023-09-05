const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors(), express.json(), express.urlencoded({ extended: true }))

// app.use(cors())
//------------------OR
// app.use(cors(
//     {
//         origin: "http:localhost:3000",
//         methods: ["GET", "POST"],
//         origin:"*"
//     }
// ))



require("dotenv").config()
require("./config/mongoose.config")
require("./routes/student.routes")(app)


const port = process.env.PORT


app.listen(port, () => {
    console.log(`>>>>>>>>>>> Server is running in port : 🎈🎈🎈${port}🎈🎈🎈`)
})