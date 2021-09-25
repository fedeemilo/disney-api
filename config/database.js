const Sequelize = require("sequelize")


const sequelize = new Sequelize("disney_db", "fedmilo_pg", "gracias2021!", {
    dialect: "postgres",
    port: 5432,
    host: "localhost",
    pool: {
        max: 10,
        idle: 30000,
    },
    define: {
        "createdAt": "createdat",
        "updatedAt": "updatedat"
    }
})

const db = {
    Character: sequelize.import('../models/character'),
    Movie: sequelize.import('../models/movie')
}

// Object.keys(db).forEach((modelName) => {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db)
//   }
// })

db.sequelize = sequelize
// db.Sequelize = Sequelize

module.exports = db