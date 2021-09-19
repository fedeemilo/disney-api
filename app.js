const express = require("express")
const app = express()
const path = require("path")

// Database
const db = require('./config/database')

// Test DB
db.authenticate().then(() => {
    console.log("Connected to DB")
}).catch(err => {
    console.log('Error: ', err);
})


app.get("/", (req, res) => {
    res.send("INDEX!")
})

// Character routes
app.use('/characters', require('./routes/characters'))

const port = process.env.port || 8000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
