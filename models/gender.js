const Sequelize = require("sequelize")
const db = require("../config/database")

const Gender = db.define("Gender", {
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

module.exports = Gender