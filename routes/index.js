const productRoute = require("./products")
const orderRoute = require("./orders")
const morgan = require("morgan")
const errorHandler = require("./errorHandler")
const express = require("express")

const route = app => {
  //parsing incoming data
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())

  //logging using morgan
  app.use(morgan("dev"))

  //routes for handling requests
  app.use("/products", productRoute)
  app.use("/orders", orderRoute)

  //handling all routes errors
  app.use((req, res, next) => {
    let error = new Error("not found")
    error.status = 404
    next(error)
  })

  //handling all errors
  app.use(errorHandler)
}

module.exports = route
