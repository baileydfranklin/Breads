const express = require('express')
const baker_seed = require('../models/baker_seed')
const baker_router = express.Router()
const bakerSchema = require('../models/baker.js')
const baker = require('../models/baker.js')

baker_router.get('/data/seed', (req, res) => {
    bakerSchema.insertMany(baker_seed)
        .then(() => { res.redirect('/breads') })
        .catch((err) => { consol.log(err) })
})

baker_router.get('/data/destroy', (req, res) => {
    bakerSchema.deleteMany()
    .then(() => { res.redirect('/breads')})
})

baker_router.get('/:id', (req, res) => {
    bakerSchema.findById(req.params.id)
    .populate('breads')
        .then((foundBakers) => {
            res.render('baker_show', {
                baker: foundBakers
            })
        })
})

baker_router.delete('/:id', (req, res) => {
    bakerSchema.findByIdAndDelete(req.params.id)
        .then((deletedBaker) => {
            res.status(303).redirect('/breads')
        })
        .catch((err) => { console.log(err) })
})

baker_router.get('/', (req, res) => {
    bakerSchema.find()
        .populate('breads')
        .then((foundBakers) => {
            res.send(foundBakers)
        })
        .catch((err) => { console.log(err) })
})
module.exports = baker_router