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

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})