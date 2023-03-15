const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')

//Show
breads_router.get('/:arrayIndex', (req, res) => {
    if(Bread[req.params.arrayIndex]) {
        res.render('show', {
            bread: Bread[req.params.arrayIndex]
        })
    }else {
        res.send('this index does not exist --> 404 error')
    }
})

// Index
breads_router.get('/', (req, res) => {
    res.render('index', {
        breads: Bread,
        title: 'Index'
    })
    // res.send(Bread)
})

module.exports = breads_router