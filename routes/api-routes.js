const Workout = require('../models/workoutSchema.js')

module.exports = function(app) {
    // working for getLastWorkout()
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(exercises => {
                res.json(exercises)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    // working for addExercise()
    app.post("/api/workouts", ({ body }, res) => {
        Workout.create(body)
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

    app.get('/api/workouts/range', function(req, res) {
        Exercise.find({}).then((data) => res.json(data));
    });

//     app.post('/api/workouts/range', function(req, res) {
//         Exercise.create({})
//             .then((data) => res.json(data));
//     });
    
//     app.put('/api/workouts/:id', ({body, params}, res)=>{
//     Exercise.findByIdAndUpdate(
//         params.id,
//         {$push: {exercises: body}},
//         {new: true, runValidators: true},
//     )
//         .then((data) => res.json(data));
//     });
// 
};