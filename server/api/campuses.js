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

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedCampus = await Campus.findByPk(req.params.id);
    await deletedCampus.destroy();
    res.send(deletedCampus);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id)

    if(req.body.studentId){
      const student = await Student.findByPk(req.body.studentId);
      campus.removeStudent(student);
      res.send(campus);
    }
    else{
      res.send(await campus.update(req.body));
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;