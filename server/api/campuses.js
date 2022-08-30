const router = require('express').Router();
const {Campus} = require('../db')

//GET all campuses
router.get('/', async (req, res, next) => {
    try {
      const campuses = await Campus.findAll({
        attributes: ['id', 'name', 'imageUrl']
      })
      res.json(campuses)
    }
    catch (error) {
      next(error)
    }
})