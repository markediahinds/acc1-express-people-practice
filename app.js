const express = require('express')
const app = express()
const peopleControllers = require('./controllers/people')

app.use(express.json())

app.use('/people', peopleControllers) // REMEMBER to connect controller

app.get('/', (req, res) => {
    res.send(`For the People, By the People`)
})

app.get('*', (req, res) => {
    res.status(500).send(`Internal Server Error`)
})


module.exports = app