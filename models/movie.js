

module.exports = (sequelize, DataTypes) => {

    const Movie = sequelize.define("Movie", {
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        creationDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        calification: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
        // associatedChars: {
        //     type: DataTypes.
        // }
    })

    return Movie


}



