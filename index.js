const express = require ("express")
const mongoose = require ("mongoose")
const dotenv = require ("dotenv")

const app = express()
const port = 3000

dotenv.config()
//to access the env file, use process.env.(name of the file)

mongoose.connect("process.env.MONGOOSE_PASSWORD").then(() => {
    console.log("mongodb connected")
})

app.listen(port, () => {
    console.log("Express server is running on port 3000")
})
