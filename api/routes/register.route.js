const express = require("express")
const router = express.Router()
const { registerUser } = require("../controllers/register.controller")

/* Register User */

/**
 * @swagger
 * /api/v1/register:
 *  post:
 *    description: REGISTER new user
 *    tags:
 *      - auth
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *              - username
 *            properties:
 *              email:
 *                type: string
 *              username:
 *                type: string
 *              password:
 *                type: string
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
router.post("/register", registerUser)

module.exports = router
