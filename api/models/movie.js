module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("movie", {
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        creationDate: {
            type: DataTypes.STRING,
            allowNull: false
        },

        calification: DataTypes.STRING
        
    })

    Movie.associate = function (models) {
        // Many to Many with characters
        Movie.belongsToMany(models.Character, {
            through: "character_movies",
            foreignKey: "movie_id",
            as: "characters",
            targetKey: 'id',
            onDelete: 'CASCADE',
        })

        // Many to many with genres
        Movie.belongsToMany(models.Genre, {
            through: "movie_genres",
            foreignKey: "movie_id",
            as: "genres",
            targetKey: 'id',
            onDelete: 'CASCADE',
        })
    }

    return Movie
}
