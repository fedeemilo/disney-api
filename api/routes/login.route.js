const express = require("express")
const router = express.Router()
const { loginUser } = require("../controllers/login.controller")

/* Login User */

/**
 * @swagger
 * /api/v1/login:
 *  post:
 *    description: LOGIN with email and password
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
 *            properties:
 *              email:
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
router.post("/login", loginUser)

module.exports = router
