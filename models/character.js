const Sequelize = require("sequelize")
const db = require("../config/database")

const Character = db.define("Character", {
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    age: {
        type: Sequelize.INTEGER,
    },

    weight: {
        type: Sequelize.FLOAT,
    },

    history: {
        type: Sequelize.STRING,
    },

    // filmsOrSeries: {
    //     type: Seq,
    // },
})

module.exports = Character