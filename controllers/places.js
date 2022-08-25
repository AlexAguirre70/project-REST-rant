
const router = require('express').Router()  // this includes express in the file an create and intializes the router
const db = require('../models')
const { populate } = require('../models/places')


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
  .populate('comments')
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
router.get('/:id/addComments', (req, res) => {
  db.Place.findById(req.params.id)
  .then( place => {
  res.render('places/addcomments',{place}) 
  })
}

)

router.post('/:id/addcomments', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
        console.log(err)
        res.render('error404')
      })
  })
  .catch(err => {
    console.log(err)
      res.render('error404')
  })

})



router.delete('/:id/comments/:rantId', (req, res) => {
    res.send('GET /places/:id/addcomments/:rantId stub')
})

module.exports = router

