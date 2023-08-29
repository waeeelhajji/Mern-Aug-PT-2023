// import Mongoose here to config our DB
const mongoose = require("mongoose")



mongoose.connect("mongodb://127.0.0.1/codingdojo")
    .then(() => { console.log(`Establish connecting to the data ✅✅ r/*codingDojo  ✅✅🎈🎈🙏🙏⬇️`) })
    .catch(err => {
        console.log("Something went wrong w rabyy yoster  ", err)
    })