// DO YOUR MAGIC
const express = require('express')

// Bring in Model
const Cars = require('./cars-model')

const router = express.Router()

// Bring in Middleware functions



// GET Request
router.get("/", (req, res ) =>{
  Cars.getAll()
    .then(car => {
      res.status(200).json(car)
    })
    .catch(err =>{
      console.log(err)
      res.status(500).json({ message: "error retriving cars"})
    })
})


// export router
module.exports = router