// This includes React to create views with html and js server side rendering
const React = require('react')

// This will include the default jsx view framework that is passed 
const Def = require('./default')

//The 404 error function to be ran when a path is not found.
function error404 () {
    return (
      <Def>
          <main>
              <div>
              <h1>404: PAGE NOT FOUND</h1>
               <img src="/images/ratatouille.jpg" alt="" />
              <p>Oops, sorry, we can't find this page!</p>
              </div>
          </main>
      </Def>
    )
  }

// This will export to be able to be used with other JSX views  
module.exports = error404