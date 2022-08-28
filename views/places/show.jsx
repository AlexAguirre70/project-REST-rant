const React = require('react')
const Def = require('../default')

function show(data){
    let comments = (
        <h3 className='inactive'>No Comments Yet</h3>
    )
    let rating =(
        <h3 className='inactive'>Not Rated Yet. Be the first</h3>
    )
    let stars=''
    if (data.place.comments.length){
        let sumRatings= data.place.comments.reduce((tot,c)=>{
            return tot+c.stars
        },0)
        let averageRating = Math.round(sumRatings/data.place.comments.length)
        

        for (let i=0;i<averageRating;i++){
            stars += '⭐' }
            rating =( 
                <h3 style={{color: '#FFB900'}}>{stars} Stars</h3>
            )
        comments=data.place.comments.map( c=>{
            return(
            <div className='borderbox'>   
                <div className='border'>
                    <h2 style={{color: '#ff6c2c' }} className='rant'>{c.rant ? 'Rant! ':"Rave!"}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong> - {c.author}</strong>
                    </h3>
                    <h4 style={{color: '#ff6c2c'}}>Rating: {c.stars}</h4>
                </div>
            </div>    
            )
        })
    }
    return(
    <Def>
        <main>
            <section> 
            <div className='detailpic'>
                <img src={`..${data.place.pic}`} alt="restaurant" width="50%"/><br />
                <h3><span className="caption"> Located in {data.place.city},{data.place.state} </span></h3>
            </div>
            <div className='info'>
                <h1>{data.place.name}</h1>
                <h4>Average Rating</h4>
                {stars}
                <h4>Description</h4>
                <p>{data.place.showEstablished()}</p>
                <p>Serving {data.place.cuisines}</p>            
                
            </div>
            </section>
            <div id="editSec">
                <a href={`/places/${data.place.id}/edit`} className='btn btn-warning' id='editBtn'>Edit</a>
                <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                    <input type='submit' className='btn btn-danger' value="Delete" id="delBtn"/>
                </form>
            </div>    
            <section>
            <div className='rants'>
                <h4>Comments</h4>
                <div id="editCmt">
                    <a href={`/places/${data.place.id}/addcomments`} className='btn btn-warning' id='newCmtBtn'>Add Comment</a>
                </div>
                {comments}


            </div>
            </section>
        </main>
    </Def>
)
}

module.exports=show  //This will export the file to be included in other views