require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log(process.env.MONGO_URI)})

// Dependencies
const methodOverride = require('method-override')

//MIDDLEWARE
app.use(methodOverride('_method')) // Because we used '_method' in the show.jsx
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('The PORT is over 9000!!')
})

const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

const bakersController = require('./controllers/bakers_controller')
app.use('/bakers', bakersController)

//404 GO LAST
app.get('*', (req, res) => {
    res.send('This is a 404 error')
})

app.listen(PORT, () => {
    console.log('Listening on PORT: ', PORT)
})
