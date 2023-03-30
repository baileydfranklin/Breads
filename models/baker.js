// require mongoose 
const mongoose = require('mongoose')
const bread = require('./bread')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const bakerSchema = new Schema({
    name: { 
        type: String, 
        required: true ,
        enum: ['Rachel', 'Joey', 'Monica', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {type: Date, required: true},
    bio: String
}, { toJSON: { virtuals: true } })

bakerSchema.virtual('breads', {
    ref: 'breadSchema',
    localField: '_id',
    foreignField: 'baker',
})

bakerSchema.post('findOneAndDelete', function() {
    bread.deleteMany({ baker: this._conditions._id })
        .then((deleteStatus) => {
            console.log(deleteStatus)
        })
        .catch((err) => { console.log(err)})
})

// model and export 
const baker = mongoose.model('bakerSchema', bakerSchema)
module.exports = baker
