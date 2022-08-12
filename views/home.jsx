const React = require('react')  //Includes React in order to render jsx files in views

const Def = require('./default')  //includes the default jsx file to provide the default jsx framework

// the function to pass the hmt js setup for the home page
function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <div>     
                <img src="/images/lily-banse--YHSwy6uqvk-unsplash.jpg" alt="restaurant cuisine" />
                <img src="/images/thai-food.jpg" alt="Thai food" />
                <img src="/images/cafe-food.jpg" alt="Cafe Food" />
              </div>
              <p>
                <a href="/places">
                    <button className="btn-primary" id='placeBtn'> Places Page</button>
                </a>
              </p>
          </main>
      </Def>
    )
  }

module.exports = home   // This will export this module to be able to be used with other views  