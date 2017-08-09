const express = require('express')
const exercisesRouter = new express.Router()
const Exercise = require('../models/Exercise')

exercisesRouter.get('/', (req, res) => {
  console.log('getting workout');

  Exercise.find({_user: req.user._id},
    (err, exercises) => {
    res.json(exercises)
  })
})

exercisesRouter.post('/', (req, res) => {
  console.log('posting workout');

  const newExercise = new Exercise(req.body)
  newExercise._user = req.user._id
  newExercise.save((err, exercise) => {
    res.json({message: 'exercise created', success: true, exercise})
  })
})

// /api/exercises/:id/sets
exercisesRouter.patch('/:id/sets', (req, res) => {
  console.log('patching workout');
  console.log(req.body)
  Exercise.findById(req.params.id, (err, exercise) => {
    exercise.sets.push(req.body)
    exercise.save((err, updatedExercise) => {
      res.json({success: true, message: "Added set to exercise.", updatedExercise})
    })
  })
})

exercisesRouter.delete('/workout', (req, res) => {
  const deleteNewExercise = new Exercise(req.body)
  deleteNewExercise._user = req.user._id
  res.json({message: 'exercise deleted'})
})




module.exports = exercisesRouter
