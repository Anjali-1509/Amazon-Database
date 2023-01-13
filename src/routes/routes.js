const express = require("express")
const router = express.Router()

router.get("/test", (req, res)=>res.send("hi i am api"))

module.exports = router