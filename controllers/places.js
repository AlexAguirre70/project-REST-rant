// this includes express in the file an create and intializes the router
const router = require('express').Router()


//this route is the default index route for '/places' path specified in the root index.js file
router.get('/',(req,res)=>{
    // this is creating dummy data as place holders and assigning it to an array of objects [{}]
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-food.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cafe-food.jpg'
      }]
      //this renders the index.jsx html within the places views and passes the array as a the data parameter
    res.render('places/index',{places})
})
// This is new form view route
router.get('/new', (req,res)=>{
    res.render('places/new')
  })
  // This is form post route
  router.post('/', (req,res)=>{
    res.send('we have posted the form')
  })


//this allows it to be included in other jsx views
module.exports = router

