const express = require('express')
const dotenv = require('dotenv')
const logger = require("morgan")
const path = require("path")
const connectDB = require('./config/db.js')

dotenv.config()

connectDB()

const PORT = process.env.PORT || 3000;
const app = express()

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})