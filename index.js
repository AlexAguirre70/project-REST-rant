const express= require('express') //includes express to be used in the file
const bodyParser= require('body-parser')


const app = express() // intializes the express and assigns it to the app variable


require('dotenv').config() // includes the dotenv environment variables

app.use(express.urlencoded({extended: true})) // This will run the body parser for the form being submitted ane encrypts the data being sent

//middleware set views engine

app.set("views", __dirname + "/views");
app.set('view engine','jsx')  // the set method tells the server to set the view engine as the default for jsx type files
app.engine('jsx',require('express-react-views').createEngine()) // the engine methods tell is that for all jsx extnesion file to use React views. the CreatEgine actually creates and intializes the view engine
app.use(express.static('public'))  // this use tell the server that for all static (non-dynamic info) to access the public folder


app.use('/places',require('./controllers/places')) // The use method tells it that when the pathname is given '/places' in the URL to acess the router js file 


app.get('/',(req,res)=>{
    res.render('home')
}) //This is the default views GET path it tells it to render the home.jsx view whenever it is asked for the root '/' path


app.get('*',(req,res)=>{
    res.render('error404')
}) //This is the GET path for the views where the path does not exist. it tells it to render the error404.jsx view  



app.listen(process.env.PORT)  //This tells the server to listen on the port provided in the dotenv file. it is access through the process.env method