// This will include REACCT to render the jsx view
const React = require('react')

// This will include the default Html view
const Def = require('../default')

// This function will contain the html for the new form
function new_form(){
    return(
    <Def>
        <main>
            <h1> Add a New Place</h1>
                <form method="POST" action="/places">
                    <div className='form-group'>
                        <label htmlFor="name">Place Name</label>                  
                        <input className="form-control" type="text" name="name" id="name" />
                    </div>   
                    <div className='form-group'>   
                        <label htmlFor="pic">Place Picture</label>
                        <input  className="form-control" type="url" name="pic" id="pic" />
                    </div>
                    <div className='form-group'>      
                        <label htmlFor="cuisines" required>Cuisines</label>
                        <input  className="form-control" type="text" name="cuisines" id="cuisines" />
                    </div>    
                    <div className='form-group'>   
                        <label htmlFor="city">Place City</label>
                        <input  className="form-control" type="text" name="city" id="city"/>
                    </div>    
                    <div className='form-group'>     
                        <label htmlFor="state">Place State</label>
                        <input  className="form-control" type="text" name="state" id="state" />
                    </div>
                    <div className='form-group'>       
                        <input type="submit" className='btn btn-primary' value="Add Place"/>
                    </div>
                </form>
        </main>
  
    </Def>
    )
}

// This will export the file to be included in other views
module.exports = new_form