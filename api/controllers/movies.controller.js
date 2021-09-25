const db = require("../../config/database")
const { errServer, errRequest } = require("../../utils/errors")
const Movie = db.Movie

module.exports = {
    /* Get all movies (image, title & creationDate) */
    moviesIndex(req, res) {
        Movie.findAll({
            attributes: ["image", "title", "creationDate"]
        })
            .then((movies) => res.status(200).json(movies))
            .catch((err) => errServer(res, err))
    }
}
