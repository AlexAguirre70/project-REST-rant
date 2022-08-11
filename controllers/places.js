
const router = require('express').Router()  // this includes express in the file an create and intializes the router
const places = require('../models/places.js')


router.get('/',(req,res)=>{
    res.render('places/index',{places})  //this renders the index.jsx html within the places views and passes the array as a the data parameter
}) //this route is the default index route for '/places' path specified in the root index.js file

router.get('/new', (req,res)=>{
    res.render('places/new')
  })  // This is new form view route
  
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
    places.push(req.body)
    res.redirect('/places')
})
   // This is form post route


module.exports = router  //this allows it to be included in other jsx views

