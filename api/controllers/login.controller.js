const db = require("../../config/database")
const User = db.User
const { errServer, errRequest } = require("../../utils/errors")
const jwt = require("jsonwebtoken")

module.exports = {
    async loginUser(req, res) {
        const { email, password } = req.body

        const userWithEmail = await User.findOne({
            where: { email }
        }).catch(err => {
            console.log(err)
            errServer(res, err)
        })

        if (!userWithEmail) {
            return errRequest(res, "Email or password does not match")
        }

        if (userWithEmail.password !== password) {
            return errRequest(res, "Email or password does not match")
        }

        const jwtToken = jwt.sign(
            {
                id: userWithEmail.id,
                email: userWithEmail.email
            },
            "this is a secret"
        )

        res.json({
            ok: true,
            message: `Welcome Back ${userWithEmail.username}!`,
            token: jwtToken
        })
    }
}
