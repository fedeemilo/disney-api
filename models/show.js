const Sequelize = require("sequelize")
const db = require("../config/database")

const Show = db.define("Show", {
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    createdAt: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    calification: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    // associatedChars: {
    //     type: Sequelize.
    // }
})

module.exports = Show
