const express = require("express")

const server = express()

// DO YOUR MAGIC

// Bring in router 
const carRouter = require('./cars/cars-router')

// use the car router
server.use("/api/cars", carRouter)

// Body needs to be read so bring this in
server.use(express.json())


server.get("/", (req, res) => {
  res.send(`<h2> Server is working <h2>`)
})

module.exports = server


