const Sequelize = require("sequelize")
const db = require("../config/database")

const Genre = db.define("Genre", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    // filmsOrSeries: {
    //     type: Seq,
    // },
})

module.exports = Genre