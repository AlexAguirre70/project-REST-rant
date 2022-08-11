// This will include REACCT to render the jsx view
const React = require('react')

// This will include the default Html view
const Def = require('../default')

// This function will contain the html for the new form
function new_form(){
    return(
    <Def>
        <main>
            <div>
                <h1> Add a New Place</h1>
            </div>
        </main>
    </Def>
    )
}

// This will export the file to be included in other views
module.exports = new_form