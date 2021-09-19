const Sequelize = require("sequelize")

// new Sequelize(database, username, password)
module.exports = new Sequelize("test_db", "test_node_admin", "iamapassword", {
    dialect: "postgres",
    port: 5432,
    host: "localhost",
    pool: {
        max: 10,
        idle: 30000,
    },
})
