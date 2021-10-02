const passport = require("passport")

const authWithToken = passport.authenticate("jwt", { session: false })

module.exports = { authWithToken }
