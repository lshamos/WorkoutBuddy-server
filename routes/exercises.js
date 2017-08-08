const express = require('express')
const exercisesRouter = new express.Router()

exercisesRouter.get('/', (req, res) => {
  Exercise.find({_user: req.user._id},
    (err, exercises) => {
    res.json({message: 'exercises root'})
  })
})


module.exports = exercisesRouter
