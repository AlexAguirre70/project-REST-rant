
const router = require('express').Router()  // this includes express in the file an create and intializes the router
const e = require('express')
const places = require('../models/places.js')

//this route is the default index route for '/places' path specified in the root index.js file
router.get('/',(req,res)=>{
    res.render('places/index',{places})  //this renders the index.jsx html within the places views and passes the array as a the data parameter
}) 

 // This is new form view route
router.get('/new', (req,res)=>{
    res.render('places/new')
  }) 
  
router.get('/:id', (req,res)=>{
    let id = Number(req.params.id)
    if(isNaN(id)){
      res.render('error404')
    }
    else if (!places[id]){
      res.render('error404')
    }
    else {
    res.render('places/show',{place: places[id],id} )
    }
})  
 //create new place via post 
router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    req.body.key = places.length+1
    places.push(req.body)
    res.redirect('/places')
})
// This will be the edit route
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})

//this will add the updated data back to the array
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }
      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})

//This will Delete the places
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id,1)
    res.redirect('/places')
  }
})

module.exports = router  //this allows it to be included in other jsx views

