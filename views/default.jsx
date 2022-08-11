// This includes the REACT middleware that allows us to write html and JS in server side rendering
const React = require('react')

//The Default function that writes the basic view html framwework, pulls in bootstrap css and the custom css stylesheets
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../css/style.css" />
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
// Exports the Default module to be able to use in other views
module.exports = Def

