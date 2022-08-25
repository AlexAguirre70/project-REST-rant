const React = require('react')  //This will include REACT to render the jsx view
const Def = require('../default')  //This will include the default Html view

// This function will contain the html for the new form
function new_comment(data) {
    /*let message =''
    if(data.message){
        message =<h4 className='alert alert-danger'>
         {data.message}   
        </h4> 
    }*/
    return (     
   
    <Def>
        <main>
         <div className="newCommentform">
            <form method="POST" action={`/places/${data.place.id}/addcomments`}>
                                
            <h1> Add a New Comment</h1>            
            <div className='col'>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" id="author" name="author" required />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Your Comments</label>
                    <input  className="form-control" id="content" name="content"/>
                </div>
            </div>    
            <div className='col'>
                <div className="form-group">
                    <label htmlFor="stars">Star Rating</label>
                    <input type='number' min={1.0} max={5.0} step={.5} className="form-control" id="ratings" name="stars" />
                </div>
                <div className="form-group">
                    <label htmlFor="rant">Rant</label>
                    <input type="checkbox" id="rant" name="rant" />  
                </div>
            </div> 
               
                <input className="btn btn-primary" type="submit" name="submit" value="Add Comment" />
            </form>
         </div>   
        </main>
    </Def>   )
}

module.exports = new_comment  //This will export the file to be included in other views