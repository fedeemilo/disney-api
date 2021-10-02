const express = require("express")
const router = express.Router()
const { authWithToken } = require("../../middlewares")
const {
    moviesIndex,
    moviesAdd
} = require("../controllers/movies.controller")

/* GET movies list (image, title and creationDate) */

/**
 * @swagger
 * /api/v1/movies:
 *  get:
 *    description: GET all disney movies and series || SEARCH by title, genre or in creation order (ASC | DESC)
 *    tags:
 *      - movies
 *    parameters:
 *      - in: query
 *        name: title
 *        description: Search movie/serie by title
 *        schema:
 *          type: string
 *      - in: query
 *        name: genre
 *        description: Search movie/serie by genre
 *        schema:
 *          type: integer
 *      - in: query
 *        name: order
 *        description: Search movie/serie by order of creation ASC | DESC
 *        schema:
 *          type: string
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
router.get("/movies", authWithToken, moviesIndex)

/* ADD a new movie/serie */

/**
 * @swagger
 * /api/v1/movies/add:
 *  post:
 *    description: ADD new movie/serie
 *    tags:
 *      - movies
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - title
 *              - image
 *              - creationDate
 *            properties:
 *              title:
 *                type: string
 *              image:
 *                type: string
 *              creationDate:
 *                type: string
 *                default: DD/MM/YYYY
 *              calification:
 *                type: number
 *              character_id:
 *                  type: array
 *                  items:
 *                      type: integer
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
 */
router.post("/movies/add", authWithToken, moviesAdd)

module.exports = router
