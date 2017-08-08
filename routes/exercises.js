const express = require('express')
const exercisesRouter = new express.Router()
const Exercise = require('../models/Exercise')
exercisesRouter.get('/', (req, res) => {
  Exercise.find({_user: req.user._id},
    (err, exercises) => {
    res.json(exercises)
  })
})

exercisesRouter.post('/', (req, res) => {
  const newExercise = new Exercise(req.body)
  newExercise._user = req.user._id
  newExercise.save((err, exercise) => {
    res.json({message: 'exercise created', success: true, exercise})
  })

})


module.exports = exercisesRouter
