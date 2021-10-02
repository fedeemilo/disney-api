const express = require("express")
const { authWithToken } = require("../../middlewares")
const router = express.Router()
const {
    charactersIndex,
    charactersAdd,
    charactersEdit,
    charactersDelete,
    characterById
} = require("../controllers/characters.controller")

/* GET characters list (image and name) */

/**
 * @swagger
 * /api/v1/characters:
 *  get:
 *    description: GET all disney characters || SEARCH by name, age or weight
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
 *    produces:
 *      - application/json
 *
 *    responses:
 *      '200':
 *          description: A succesful response
 *      '400':
 *          description: Bad request. The ID does not exist
 *      '401':
 *          description: You must provide an authorization token
 *      '500':
 *          description: Unexpected server error
 */
router.get("/characters", authWithToken, charactersIndex)

/* GET character by ID */

/**
 * @swagger
 * /api/v1/characters/{id}:
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
 *      '401':
 *          description: You must provide an authorization token
 *      '500':
 *          description: Unexpected server error
 */
router.get("/characters/:id", authWithToken, characterById)

/* ADD a new character */

/**
 * @swagger
 * /api/v1/characters/add:
 *  post:
 *    description: ADD new character
 *    tags:
 *      - characters
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - image
 *            properties:
 *              name:
 *                type: string
 *              image:
 *                type: string
 *              age:
 *                type: integer
 *              weight:
 *                type: number
 *              history:
 *                type: string
 *              movies:
 *                type: array
 *                items:
 *                  type: integer
 *    produces:
 *      - application/json
 *
 *    responses:
 *      '200':
 *          description: A succesful response
 *      '400':
 *          description: Bad request. The ID does not exist
 *      '401':
 *          description: You must provide an authorization token
 *      '500':
 *          description: Unexpected server error
 */
router.post("/characters/add", authWithToken, charactersAdd)

/* EDIT a character */

/**
 * @swagger
 * /api/v1/characters/edit/{id}:
 *  put:
 *    description: EDIT character by id
 *    tags:
 *      - characters
 *    parameters:
 *      - in: path
 *        name: id
 *        description: Character ID
 *        required: true
 *        schema:
 *          type: integer
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - image
 *            properties:
 *              name:
 *                type: string
 *              image:
 *                type: string
 *              age:
 *                type: integer
 *              weight:
 *                type: number
 *              history:
 *                type: string
 *              movieId:
 *                  type: integer
 *
 *    produces:
 *      - application/json
 *
 *    responses:
 *      '200':
 *          description: A succesful response
 *      '400':
 *          description: Bad request. The ID does not exist
 *      '401':
 *          description: You must provide an authorization token
 *      '500':
 *          description: Unexpected server error
 *
 */
router.put("/characters/edit/:id", authWithToken, charactersEdit)

/* DELETE a character */

/**
 * @swagger
 * /api/v1/characters/delete/{id}:
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
 *      '401':
 *          description: You must provide an authorization token
 *      '500':
 *          description: Unexpected server error
 *
 */
router.delete(
    "/characters/delete/:id",
    authWithToken,
    charactersDelete
)

module.exports = router
