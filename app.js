const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

//calling the route
const route = require("./routes/index")
route(app)

//listening to server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
