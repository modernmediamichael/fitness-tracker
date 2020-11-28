const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ExerciseShema = new Schema ({
    type: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    name: {
        type: String,
        trim: true,
      },
    weight: {
        type: Number,
        trim: true,
        },
    sets: {
        type: Number,
        trim: true,
    },
    reps: {
        type: Number,
        trim: true,
    },
    duration: {
        type: Number,
        trim: true,
    },
    time: {
        type: Date,
        default: Date.now
    },
    distance: {
        type: Number,
        trim: true
    },
    duration: {
        type: Number,
        trim: true
    }
}
)

const Exercise = mongoose.model("Exercise", ExerciseShema)

module.exports = Exercise