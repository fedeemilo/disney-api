const passport = require("passport")
const passportJwt = require("passport-jwt")
const ExtractJwt = passportJwt.ExtractJwt
const Strategy = passportJwt.Strategy

const db = require("../config/database")
const User = db.User

passport.use(
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "this is a secret"
        },
        (jwtPayload, done) => {
            return User.findOne({ where: { id: jwtPayload.id } })
                .then(user => {
                    return done(null, user)
                })
                .catch(err => {
                    return done(err)
                })
        }
    )
)
