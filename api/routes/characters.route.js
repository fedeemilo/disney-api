const express = require("express");
const router = express.Router();
const db = require("../../config/database");
const Character = require("../../models/character");

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
router.get("/", (req, res) =>
  Character.findAll()
    .then((chars) => {
      console.log(chars);
      res.status(200).json(chars);
    })
    .catch((err) => console.log(err))
);

/* ADD a new character */
router.post("/add", (req, res) => {
    console.log(req.body);
  let { image, name, age, weight, history } = req.body;

  // Insert into table
  Character.create({
    image,
    name,
    age,
    weight,
    history,
  })
    .then((char) => res.redirect("/characters"))
    .catch((err) => console.log(err));
});

/* EDIT a character */
router.put("/edit", (req, res) => {});

/* DELETE a character */
router.delete("/delete", (req, res) => {});

module.exports = router;
