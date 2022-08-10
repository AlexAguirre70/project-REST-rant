//includes express to be used in the file
const express= require('express')

// intializes the express and assigns it to the app variable
const app = express()

// includes the dotenv environment variables
require('dotenv').config()

// includes the route controller js files
// The use method tells it that when the pathname is given '/places' in the URL to acess the router js file 
app.use('/places',require('./controllers/places'))

//middleware set views engine
// the set method tells the server to set the view engine as the default for jsx type files
app.set('view engine','jsx')

// the engine methods tell is that for all jsx extnesion file to use React views. the CreatEgine actually creates and intializes the view engine
app.engine('jsx',require('express-react-views').createEngine())

// this use tell the server that for all static (non-dynamic info) to access the public folder
app.use(express.static('public'))

//This is the default views GET path it tells it to render the home.jsx view whenever it is asked for the root '/' path
app.get('/',(req,res)=>{
    res.render('home')
})

//This is the GET path for the places sub-directory insisde the views folder tells it to render the index.jsx view 
app.get('/places', (req,res)=>{
    res.render('places/index')
})
//This is the GET path for the views where the path does not exist. it tells it to render the error404.jsx view
app.get('*',(req,res)=>{
    res.render('error404')

})
//This tells the server to listen on the port provided in the dotenv file. it is access through the process.env method
app.listen(process.env.PORT)