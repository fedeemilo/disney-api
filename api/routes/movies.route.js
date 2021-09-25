const express = require("express");
const { moviesIndex } = require("../controllers/movies.controller");
const router = express.Router();

/* GET shows list (image, title and creationDate) */

/**
 * @swagger
 * /movies:
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
 *      '500':
 *          description: Unexpected server error
 */
router.get('/', moviesIndex)


module.exports = router