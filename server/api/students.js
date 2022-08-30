const router = require('express').Router();
const {Campus, Student} = require('../db')

// GET /api/students
router.get('/', async (req, res, next) => {
    try {
      const students = await Student.findAll({
        attributes: ['id', 'firstName', 'lastName', 'email'],
      })
      res.json(students)
    }
    catch (error) {
      next(error)
    }
  })