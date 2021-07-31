const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
  res.status(200).json({ success: true, message: "order fetched" })
})

router.post("/", async (req, res) => {
  res.status(201).json({ success: true, message: "order created" })
})

router.get("/:orderId", async (req, res) => {
  const id = req.params.orderId
  if (id == "special") {
    return res
      .status(200)
      .json({ success: true, message: "you have reached a special order" })
  }
  res
    .status(200)
    .json({ success: true, message: "single order fetched with general id" })
})

router.put("/:orderId", async (req, res) => {
  res.status(200).json({ success: true, message: "order updated" })
})

router.delete("/:orderId", async (req, res) => {
  res.status(200).json({ success: true, message: "order deleted" })
})

module.exports = router
