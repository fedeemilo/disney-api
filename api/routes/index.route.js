const express = require("express")
const router = express.Router()
const registerApi = require("./register.route")
const loginApi = require("./login.route")
const charactersApi = require("./characters.route")
const moviesApi = require("./movies.route")

router.use(registerApi)
router.use(loginApi)
router.use(charactersApi)
router.use(moviesApi)

module.exports = router
