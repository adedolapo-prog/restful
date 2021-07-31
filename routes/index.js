const productRoute = require("./products")
const orderRoute = require("./orders")

const route = app => {
  app.use("/products", productRoute)
  app.use("/orders", orderRoute)
}

module.exports = route
