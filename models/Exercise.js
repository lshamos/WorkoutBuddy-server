const
mongoose = require('mongoose'),
setSchema = new mongoose.Schema({
  lbs: Number,
  reps: Number
}),
exerciseSchema = new mongoose.Schema({
  name: String,
  sets: [setSchema],
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const Exercise = mongoose.model('Exercise', exerciseSchema)
module.exports = Exercise


// Exercise.find({_user: req.user._id}, (err, exercises) => {
//   console.log(exercises)
//
// })

/*
[
  {name: "pushups", sets: [{reps: 10}, {reps: 15}, {reps: 20}]},
  {name: "pushups", sets: [{reps: 10}, {reps: 15}, {reps: 20}]},
  {name: "pushups", sets: [{reps: 10}, {reps: 15}, {reps: 20}]},
]

*/

// 1. Logged in user creates a new exercise
// 2. User is redirected to that new exercise' show page
// 3. User can add a set. Set will just include the number of reps
