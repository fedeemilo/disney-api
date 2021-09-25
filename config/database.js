const Sequelize = require("sequelize")

// new Sequelize(database, username, password)
module.exports = new Sequelize("disney_db", "fedmilo_pg", "gracias2021!", {
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
