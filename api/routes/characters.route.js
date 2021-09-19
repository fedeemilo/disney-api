const express = require("express");
const router = express.Router();
const db = require("../../config/database");
const {
  charactersIndex,
  charactersAdd,
  charactersEdit,
  charactersDelete,
} = require("../controllers/characters.controller");

/* GET characters list (image and name) */

/**
 * @swagger
 * /characters:
 *  get:
 *    description: GET all disney characters
 *
 *    produces:
 *      - application/json
 *
 *    responses:
 *      '200':
 *          description: A succesful response
 */
router.get("/", charactersIndex);

/* ADD a new character */
router.post("/add", charactersAdd);

/* EDIT a character */
router.put("/edit/:id", charactersEdit);

/* DELETE a character */
router.delete("/delete/:id", charactersDelete);

module.exports = router;
