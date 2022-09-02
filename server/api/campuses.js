const router = require('express').Router();
const {Campus, Student} = require('../db')

//GET all campuses
router.get('/', async (req, res, next) => {
    try {
      const campuses = await Campus.findAll()
      res.json(campuses)
    }
    catch (error) {
      next(error)
    }
})

//GET a specific campus and all associated students
router.get('/:campusId', async (req, res, next) => {
  try {
    console.log(req.params.campusId)
    const singleCampus = await Campus.findByPk(req.params.campusId, {
      include: [
          {
            model: Student,
            where:{
              campusId : req.params.campusId
            }
          }
      ]
    })
    console.log(singleCampus);
    res.json(singleCampus)
  }
  catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    res.status(201).json(newCampus); 
  } catch (error) {
    console.error(error.response)
    next(error);
  }
});

module.exports = router;