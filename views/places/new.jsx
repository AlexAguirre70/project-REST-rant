const React = require('react')  //This will include REACCT to render the jsx view

const Def = require('../default')  //This will include the default Html view

// This function will contain the html for the new form
function new_form(data) {
    let message =''
    if(data.message){
        message =<h4 className='alert alert-danger'>
         {data.message}   
        </h4>
    }
    return (
    <Def>
        <main>
         <div className="newform">
            <form method="POST" action="/places">
            <h1> Add a New Place</h1>
                {message}
            <div className='row'>
                <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic" name="pic"/>
                </div>
            </div>    
            <div className='row'>
                <div className="form-group col-sm-6">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" name="city" />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="state" name="state" />
                </div>
            </div> 
            <div className='row'>   
                <div className="form-group col-sm-6">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" required />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="founded">Founded Year</label>
                    <input type="number" className="form-control" id="founded" name="founded" value={new Date().getFullYear()}/>
                </div>
            </div>    
                <input className="btn btn-primary" type="submit" name="submit" value="Add Place" />
            </form>
         </div>   
        </main>
    </Def>
    )
}

module.exports = new_form  //This will export the file to be included in other views