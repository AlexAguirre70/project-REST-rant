const React = require('react')  //This includes the React middleware to render views via the server

const Def = require('../default') //This includes the default html views frameworks

// The function to render the index page for detail views. It loops through using the map function to display all items included
function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className='col-sm-6'>
        <h2>{place.name}</h2>
        <p className='text-center'> {place.cuisines}</p>
        <img src={place.pic} alt={place.name}/>
        <p className='text-center'> Located in {place.city}, {place.state}</p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to Rant and Rave About</h1>
            <div className='row'>
            {placesFormatted}
            </div>
            <p>
                <a href="/places/new">
                    <button>Add Your Restaurant</button>
                </a>
              </p>
        </main>
    </Def>
)
}

module.exports = index  //This makes the view detail index page available 
