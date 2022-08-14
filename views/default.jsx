const React = require('react')  // This includes the REACT middleware that allows us to write html and JS in server side rendering

//The Default function that writes the basic view html framwework, pulls in bootstrap css and the custom css stylesheets
function Def (html) {
    return (
        <html>
            <head>
                <title>REST-Rant</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="../../css/style.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">Add a Place</a></li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
  }

module.exports = Def   // Exports the Default module to be able to use in other views
