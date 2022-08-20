const mongoose = require('mongoose')

const placeSchema= new mongoose.Schema({
    key: Number,
    name: {type:String, required:true},
    pic: {type:String, default: 'http://placekitten.com/350/350'},
    cuisines: {type:String, required:true},
    city: {type:String, default:'Anytown'},
    state: {type:String, default:'USA'},
    founded: {        
        type:Number,
        min: [1673, 'Surely Not that old?'],
        max: [new Date().getFullYear(), "Hey, This is a year into the future!"]
    }
})

placeSchema.methods.showEstablished= function(){
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports= mongoose.model('Place', placeSchema)