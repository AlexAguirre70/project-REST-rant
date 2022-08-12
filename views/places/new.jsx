const React = require('react')  //This will include REACCT to render the jsx view

const Def = require('../default')  //This will include the default Html view

// This function will contain the html for the new form
function new_form() {
    return (
    <Def>
        <main>
         <div className="newform">
            <form method="POST" action="/places">
            <h1> Add a New Place</h1>
                <div className="form-group">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic" name="pic" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" name="city" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="state" name="state" />
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" required />
                </div>
                <input className="btn btn-primary" type="submit" name="submit" value="Add Place" />
            </form>
         </div>   
        </main>
    </Def>
    )
}

module.exports = new_form  //This will export the file to be included in other views