// DEPENDENCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// CONFIG/MIDDLEWARE
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})

// ROOT INDEX 
app.get('/', (req, res) => {
    res.send('Hello World')
})

// BOOKS 
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})


// // DEPENDENCIES
// const express = require('express')
// const mongoose = require('mongoose')

// // CONFIGURATION
// require('dotenv').config()
// const PORT = process.env.PORT
// const app = express()
// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
//     () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
// )

// // MIDDLEWARE
// app.use(express.urlencoded({extended: true}))

// // ROUTES
// app.get('/', (req, res) => {
//   res.send('Welcome to the Hello World! API')
// })

// // Languages: 
// const languagesController = require('./controllers/languages_controller.js')
// app.use('/languages', languagesController)

// // LISTEN
// app.listen(PORT, () => {
//   console.log('Greetings! From port: ', PORT);
// })