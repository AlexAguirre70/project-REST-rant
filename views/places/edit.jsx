const React = require('react')
const Def = require('../default')

function edit_form(data){
        let dataID=data.place.key
      return (
        <Def>
            <main>
            <div className="newform">
            <form method="POST" action={`/places/${data.place.key}?_method=PUT`}>
            <h1>Edit Place </h1> 
            <div className='row'>
                <div className="form-group col-sm-6">
                    <label htmlFor="editName">Place Name</label>
                    <input className="form-control" id="editName" name="editName" defaultValue={data.place.name} required />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="editPic">Place Picture</label>
                    <input className="form-control" id="editPic" name="editPic" defaultValue={data.place.pic} />
                </div>
            </div>   
            <div className='row'>
                <div className="form-group col-sm-6">
                    <label htmlFor="editCity">City</label>
                    <input className="form-control" id="editCity" name="editCity" defaultValue={data.place.city}/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="editState">State</label>
                    <input className="form-control" id="editState" name="editState" defaultValue={data.place.state}/>
                </div>
            </div>
                <div className="form-group">
                    <label htmlFor="editCuisines">Cuisines</label>
                    <input className="form-control" id="editCuisines" name="editCuisines" defaultValue={data.place.cuisines} required />
                </div>
                <input className="btn btn-primary" type="submit" name="saveBtn" id="saveBtn" value="Save Edits" />
            </form>
         </div>   
            </main>
        </Def>
    )
}
module.exports = edit_form