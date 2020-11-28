const express = require('express')
const logger = require("morgan")
const path = require("path")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3000;
const app = express()

app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker", { useNewUrlParser: true})

app.use(express.static("app/public"));

require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})