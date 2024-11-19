const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send(`For the People, By the People`)
})

app.get('*', (req, res) => {
    res.status(404).send(`Internal Server Error`)
})


module.exports = app