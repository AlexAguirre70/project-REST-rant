# Project Rest-Rant

Rest-Rant is a sample web app where users can rate restaurants

The functions on this app can be accessed with the following routes:
Method      Path                        Purpose
GET         /                           Home Page
GET         /places                     Places index page
POST        /places                     Create a new place
GET         /places/new                 Form page for creating a new place
GET         /places/:id                 Details about a particular place
PUT         /places/:id/edit            Form page for editing an existing place
DELETE      /places/:id                 Delete a particular place
POST        /places/:id/rant            Create a rant (comment) about a place
DELETE      /places/:id/rant/:rantId    Delete a rant (comment) about a place       
GET         *                           404 Error page