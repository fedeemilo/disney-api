const express = require("express");
const router = express.Router();
const {
  charactersIndex,
  charactersAdd,
  charactersEdit,
  charactersDelete,
  characterById
} = require("../controllers/characters.controller");

/* GET characters list (image and name) */

/**
 * @swagger
 * /characters:
 *  get:
 *    description: GET all disney characters || SEARCH by name, age, weight or movieID
 *    tags:
 *      - characters
 *    parameters:
 *      - in: query
 *        name: name
 *        description: Search character by name
 *        schema:
 *          type: string
 *      - in: query
 *        name: age
 *        description: Search character by age
 *        schema:
 *          type: integer
 *      - in : query
 *        name: weight
 *        description: Search character by weight
 *        schema:
 *          type: number
 *      - in: query
 *        name: movies
 *        description: Search character by movieID
 *        schema:
 *          type: integer
 *    produces:
 *      - application/json
 *
 *    responses:
 *      '200':
 *          description: A succesful response
 *      '400':
 *          description: Bad request. The ID does not exist
 *      '500':
 *          description: Unexpected server error
 */
router.get("/", charactersIndex);


/* GET character by ID */

/**
 * @swagger
 * /characters/{id}:
 *  get:
 *    description: GET detailed character by ID
 *    tags:
 *      - characters
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Character ID
 *        required: true
 *        schema:
 *          type: integer
 *    produces:
 *      - application/json
 *
 *    responses:
 *      '200':
 *          description: A succesful response
 *      '400':
 *          description: Bad request. The ID does not exist
 *      '500':
 *          description: Unexpected server error
 */
router.get('/:id', characterById)


/* ADD a new character */

/**
 * @swagger
 * /characters/add:
 *  post:
 *    description: ADD new character
 *    tags:
 *      - characters
 *    parameters:
 *      - in: body
 *        name: character
 *        description: Add a new character to the database
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - image
 *          properties:
 *            name:
 *              type: string
 *            image:
 *              type: string
 *            age:
 *              type: integer
 *            weight:
 *              type: number
 *            history:
 *              type: string
 *
 *    produces:
 *      - application/json
 *
 *    responses:
 *      '200':
 *          description: A succesful response
 *      '400':
 *          description: Bad request. The ID does not exist
 *      '500':
 *          description: Unexpected server error
 */
router.post("/add", charactersAdd);

/* EDIT a character */

/**
 * @swagger
 * /characters/edit/{id}:
 *  put:
 *    description: ADD new character
 *    tags:
 *      - characters
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Character ID
 *        required: true
 *        schema:
 *          type: integer
 *      - in: body
 *        name: character
 *        description: Add a new character to the database
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - image
 *          properties:
 *            name:
 *              type: string
 *            image:
 *              type: string
 *            age:
 *              type: integer
 *            weight:
 *              type: number
 *            history:
 *              type: string
 *
 *    produces:
 *      - application/json
 *
 *    responses:
 *      '200':
 *          description: A succesful response
 *      '400':
 *          description: Bad request. The ID does not exist
 *      '500':
 *          description: Unexpected server error
 *
 */
router.put("/edit/:id", charactersEdit);

/* DELETE a character */

/**
 * @swagger
 * /characters/delete/{id}:
 *  delete:
 *    description: DELETE a character
 *    tags:
 *      - characters
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Character ID
 *        required: true
 *        schema:
 *          type: integer
 *
 *    produces:
 *      - application/json
 *
 *    responses:
 *      '200':
 *          description: A succesful response
 *      '400':
 *          description: Bad request. The ID does not exist
 *      '500':
 *          description: Unexpected server error
 *
 */
router.delete("/delete/:id", charactersDelete);

module.exports = router;
