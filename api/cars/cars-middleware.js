const Cars = require("./cars-model")


const checkCarId =  async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params
  try{
    const car = await Cars.getById(id)
    if(!car){
      res.status(404).json({ message: `car with id ${id} is not found`})
    }
    else{
      res.car = car
      next();
    }
  }
  catch(err){
    res.status(500).json({ message: "Error recieving car"})
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body

  try{
    if(!vin || !make || !model || !mileage){
      res.status(400).json ({ message: "<field name> is missing" })
    }
    else{
      next();
    }
  }
  catch{
    res.status(500).json({ message: "Error finding car"})
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body
  try{
    if(!vin){
      res.status(400).json({message: `vin ${vin} is invalid` })
    }
    else{
      next();
    }
  }
  catch{
    res.status(500).json({ message: "Error validating Vin number"})
  }
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}