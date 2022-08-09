const express= require('express')
const home = require('./views/home')
const app = express()

//middleware set views engine
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())

//environment variables
require('dotenv').config()

app.use('/places',require('./controllers/places'))

app.get('/',(req,res)=>{
    res.render('home')
})
app.get('*',(req,res)=>{
    res.status(404).send(`<h1>404 Page not found</h1>`)

})

app.listen(process.env.PORT)