const router = require('express').Router();
const {Campus, Student} = require('../db')

// GET /api/students
router.get('/', async (req, res, next) => {
    try {
      const students = await Student.findAll()
      res.json(students)
    }
    catch (error) {
      next(error)
    }
  })

//GET a specific student and associated campus
router.get('/:studentId', async (req, res, next) => {
  try {
    const singleStudent = await Student.findByPk(req.params.studentId, {
      include: [
          {
            model: Campus,
          }
      ]
    })
    res.json(singleStudent)
  }
  catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body)
    res.status(201).json(newStudent); //.json instead of .send?
  } catch (error) {
    next(error);
  }
});

module.exports = router;