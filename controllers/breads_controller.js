const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')
const bread_seed = require('../models/bread_seed')
const baker = require('../models/baker')

// Seed
breads_router.get('/data/seed', (req, res) => {
  Bread.insertMany(bread_seed)
    .then(() => res.redirect('/breads'))
    .catch(err => { console.log(err) })
})

// DestroyAll
// Seed
breads_router.get('/data/destroy', (req, res) => {
  Bread.deleteMany()
    .then(() => res.redirect('/breads'))
    .catch(err => { console.log(err) })
})

//New
breads_router.get('/new', (req, res) => {
  bakerSchema.find()
    .then((foundBakers) => {
      res.render('new', { bakers: foundBakers })
    })
})

//Edit
breads_router.get('/:id/edit', (req, res) => {
  baker.find()
    .then((foundBakers) => {
      Bread.findById(req.params.id) // "Bread."findById ref: line 3
        .then((foundBread) => {
          res.render('edit', {
            bread: foundBread,
            bakers: foundBakers,
          })
        })
        .catch((err) => { console.log(err) })
    })
    .catch((err) => { console.log(err) })
})


//Show
breads_router.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
    // .populate('baker')
    .then((foundBread) => {
      console.log(foundBread)
      let bakedBy = foundBread.getBakedBy()
      console.log(bakedBy)
      res.render('show', {
        bread: foundBread
      })
    })
    .catch((err) => { console.log(err) })
})


//Update
breads_router.put('/:id', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedBread => {
      console.log(updatedBread)
      res.redirect(`/breads/${req.params.id}`)
    })
})


// Delete
breads_router.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
      res.status(303).redirect('/breads')
    })
})


// Index
breads_router.get('/', (req, res) => {
  baker.find()
    .then((foundBakers) => {
      Bread.find()
        .then(foundBreads => {
          res.render('index', {
            breads: foundBreads,
            bakers: foundBakers,
            title: 'Index Page'
          })
        })
    })
})

//Create
breads_router.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined
  }
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

module.exports = breads_router