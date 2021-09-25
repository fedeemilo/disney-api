const express = require("express")
const app = express()

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

app.get("/", (req, res) => {
    res.send("INDEX!")
})

// Character routes
app.use("/characters", require("./api/routes/characters.route"))
app.use("/movies", require("./api/routes/movies.route"))

const port = process.env.port || 8000

db.sequelize
    .sync()
    .then((x) =>
        app.listen(port, () =>
            console.log(`Server listening on port ${port}`)
        )
    )
