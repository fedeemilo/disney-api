module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define("character", {
        image: {
            type: DataTypes.STRING(200),
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
            type: DataTypes.STRING(500)
        }
    })

    Character.associate = function (models) {
        // Many to many with movies
        Character.belongsToMany(models.Movie, {
            through: "character_movies",
            as: "movies",
            foreignKey: "character_id",
            targetKey: "id",
            onDelete: "CASCADE"
        })
    }

    return Character
}
