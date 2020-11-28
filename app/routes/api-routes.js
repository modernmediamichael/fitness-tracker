const Exercise = require('../models/exerciseSchema.js')

module.exports = function(app) {
    // working for getLastWorkout()
    app.get("/api/workouts", (req, res) => {
        Exercise.find({}).limit(1)
            .then(exercises => {
                res.json(exercises)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    // pending for addExercise()
    app.post("/api/workouts", ({ body }, res) => {
        Exercise.create(body)
            .then(exercise => {
                res.json(exercise)
            })
            .catch(err => {
                res.json(err)
            })
    })

    // // pending
    // app.get("/api/workouts", (req, res) => {

    // });
  };
