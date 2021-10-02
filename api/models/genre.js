module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define("genre", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Genre.associate = function (models) {
        // Many to many with movies
        Genre.belongsToMany(models.Movie, {
            through: "movie_genres",
            foreignKey: "genre_id",
            targetKey: 'id',
            onDelete: 'CASCADE',
        })
    }

    return Genre
}
