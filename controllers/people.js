const express = require('express') // why do we need to invoke the express router in the controllers and the app.js? // bc we need it to create the instance of the express here, mini app (in express) is connected to overall app (in app.js) // keep separate, on app.js, all the aspects of backend server // separation of concerns | everything regards to 
const people = express.Router()
const peopleArr = require('../data/people')


people.post('/', (req, res) => {
    // req.body provides us with the person object automatically
    peopleArr.push(req.body)
    res.status(201).json(peopleArr[peopleArr.length-1]) // access the last person in the peoplesArr
})


people.get('/', (req, res) => {
    try {
        res.status(200).json(peopleArr)
    } catch (error) {
        console.log('Error', error) 
        res.status(404).json({ error: 'Person Not Found' })
    }
})


people.get('/:id', (req, res) => {
    // const personID = req.params.id
    const { id } = req.params // id's start at 1, index starts at 0
    try {
        const person = peopleArr.find(person => person.id === Number(id)) // if the id pulled from the params matches an id in the arr.. 
        if (person) {   
            res.status(200).json(person) // ..render it
        }
    } catch (error) {
        console.log('Error', error)
        res.status(404).json({ error: 'Person Not Found' })
    }
})


people.put('/:id', (req, res) => {
    const { id } = req.params
    try {
        const personIdx = animesArr.findIndex(person => person.id === Number(id)); // findIndex will return the index or -1
            if (index !== -1) {
                peopleArr.splice(personIdx, 1) // or use filter (unsure how to apply that)   
                res.status(200).json(peopleArr) // what status is best? Status for receiving response or stat for successfully deleting element?
        }
    } catch (error) {
        console.log('Error', error)
        res.status(404).json({ error: 'Person Not Found' })
    }
}) 


people.delete('/:id', (req, res) => {
    const { id } = req.params
    try {
        const person = req.body
        const personIdx = animesArr.findIndex(person => person.id === Number(id)); // findIndex will return the index or -1
            if (index !== -1) {
                peopleArr.splice(personIdx, 1, person) // or use filter (unsure how to apply that)   
                res.status(200).json(peopleArr) // what status is best? Status for receiving response or stat for successfully deleting element?
        }
    } catch (error) {
        console.log('Error', error)
        res.status(404).json({ error: 'Person Not Found' })
    }
})


module.exports = people