

module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define("character", {
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        age: {
            type: DataTypes.INTEGER
        },

        weight: {
            type: DataTypes.FLOAT
        },

        history: {
            type: DataTypes.STRING
        }

        // filmsOrSeries: {
        //     type: Seq,
        // },
    })

    return Character
}
