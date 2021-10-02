const db = require("../../config/database")
const User = db.User
const { errServer, errRequest } = require("../../utils/errors")

module.exports = {
    async registerUser(req, res) {
        const { username, email, password } = req.body

        // User already exists
        const alreadyExistsUser = await User.findOne({
            where: { email }
        }).catch(err => {
            console.log(err)
            errServer(res, err)
        })

        if (alreadyExistsUser) {
            return errRequest(
                res,
                `User with email ${email} already exists`
            )
        }

        const newUser = new User({ username, email, password })
        const savedUser = await newUser.save().catch(err => {
            console.log(err)
            errRequest(res, "Cannot register user at the moment")
        })

        if (savedUser) {
            res.status(200).json({
                ok: true,
                message: `Thanks ${username} for registering!`
            })
        }
    }
}
