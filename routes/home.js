const express = require("express")
const router = express.Router()

//bring functionality from the homecontroller for home route("/")
const {home} = require("../controller/homeController")

router.route("/").get(home)




module.exports = router