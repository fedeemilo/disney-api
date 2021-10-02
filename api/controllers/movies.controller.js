const db = require("../../config/database")
const { errServer, errRequest } = require("../../utils/errors")
const Movie = db.Movie

module.exports = {
    /* Get all movies (image, title & creationDate) */
    moviesIndex(req, res) {
        Movie.findAll({
            attributes: ["image", "title", "creationDate"]
        })
            .then(movies => res.status(200).json(movies))
            .catch(err => errServer(res, err))
    },

    moviesAdd(req, res) {
        let { image, title, creationDate, calification, character_id } = req.body

        // Insert movie/serie into table
        Movie.create({
            image,
            title,
            creationDate,
            calification,
            character_id
        })
            .then(newMovie =>
                res.status(200).json({
                    ok: true,
                    newMovie
                })
            )
            .catch(err => errServer(res, err))
    }
}
