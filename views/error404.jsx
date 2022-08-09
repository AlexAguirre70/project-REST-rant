const React = require('react')
const Def = require('./default')

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
  
module.exports = error404