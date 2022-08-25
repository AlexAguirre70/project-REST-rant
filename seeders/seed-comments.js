const db =require('../models')

// create an async await function
async function seed(){
    //Get the place H-Thai-ML
    let place=await db.Place.findOne({name:'Coding Cat Cafe'})

    // Sample comment
    let comment =await db.Comment.create({
        author: 'Dodger Dog',
        rant: true,
        stars: 1.5,
        content: 'This place is a little ruff around the edges'
    })
    place.comments.push(comment.id)
    //save the place now that it has a comment
    await place.save()
    //exit the program
    process.exit()
}
seed()