const app = require('./app.js') // export it from app and bring it here
require('dotenv').config() // no var needed for dotenv // configure/like calling a function
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Singing to me softly on PORT: ${PORT}`)
})