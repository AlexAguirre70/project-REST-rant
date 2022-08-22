
const router = require('express').Router()  // this includes express in the file an create and intializes the router
const db = require('../models')


router.get('/', (req, res) => {
  db.Place.find()
  .then((places)=>{
    res.render('places/index',{places})
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  if(!req.body.pic){
    req.body.pic="../images/NoImageFound.png"
  }
  db.Place.create(req.body)
  .then(()=>{
    res.redirect('/places')
  })
  .catch(err=>{
    if(err && err.name == "ValidationError"){
      let message='Validation Error: '
      for(var field in err.errors){
        message += `${field} was ${err.errors[field].value}`
        message += `${err.errors[field].message}`
      }
    res.render('places/new', {message})
    } else {
    res.render('error404')
    }
  })
})
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place =>{
    res.render('places/show',{place})
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})
// Missing from the Assignments
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place =>{
     res.render('places/edit',{place})
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id,req.body)
  .then(place =>{  
      console.log(`We have Updated the info for ${req.body.name}`)
      res.redirect(`/places/${req.params.id}`)  
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  }
    )
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place=>{
    console.log(`The record for ${req.params.id} has been deleted`)
    res.redirect('/places')
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})

// Next Assignment
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router



/*
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
    res.render('places/edit',{place: places[id],id})
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

*/