const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
  res.status(200).json({ success: true, message: "product fetched" })
})

router.post("/", async (req, res) => {
  res.status(201).json({ success: true, message: "product created" })
})

router.get("/:productId", async (req, res) => {
  const id = req.params.productId
  if (id == "special") {
    return res
      .status(200)
      .json({ success: true, message: "you have reached a special product" })
  }
  res
    .status(200)
    .json({ success: true, message: "single product fetched with general id" })
})

router.put("/:productId", async (req, res) => {
  res.status(200).json({ success: true, message: "product updated" })
})

router.delete("/:productId", async (req, res) => {
  res.status(200).json({ success: true, message: "product deleted" })
})

module.exports = router
