const express = require("express")
const router = express.Router()
const db = require("../config/database")
const Character = require("../models/character")

router.get("/", (req, res) =>
    Character.findAll()
        .then((chars) => {
            console.log(chars)
            res.sendStatus(200)
        })
        .catch((err) => console.log(err))
)

module.exports = router
