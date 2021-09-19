



const db = {
    Show: sequelize.import("./models/show"),
    Character: sequelize.import("./models/character"),
    Gender: sequelize.import("./models/gender"),
}

// Object.keys(db).forEach((modelName) => {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db)
//   }
// })

// db.sequelize = sequelize
// db.Sequelize = Sequelize

module.exports = { db, sequelize }