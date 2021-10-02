const express = require("express")
const app = express()
const { indexApi } = require('./utils/html') 

// Passport
const passport = require("passport")
require("./auth/passport")
app.use(passport.initialize())

// Swagger Docs
const swaggerDocs = require("./swagger_config")
// Swagger UI
const swaggerUi = require("swagger-ui-express")

// Database
const db = require("./config/database")

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Index route
app.get("/", (req, res) => {
    res.send(indexApi())
})

// Routes
app.use("/api/v1", require("./api/routes/index.route"))

const port = process.env.port || 8000

db.sequelize
    .sync()
    .then(() =>
        app.listen(port, () =>
            console.log(`Server listening on port ${port}`)
        )
    )
