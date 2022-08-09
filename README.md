# Project Rest-Rant<br /><br />

## Rest-Rant is a sample web app where users can rate restaurants<br /><br />

The functions on this app can be accessed with the following routes: <br />
Method      Path                        Purpose<br />
GET         /                           Home Page<br />
GET         /places                     Places index page<br />
POST        /places                     Create a new place<br />
GET         /places/new                 Form page for creating a new place<br />
GET         /places/:id                 Details about a particular place<br />
PUT         /places/:id/edit            Form page for editing an existing place<br />
DELETE      /places/:id                 Delete a particular place<br />
POST        /places/:id/rant            Create a rant (comment) about a place<br />
DELETE      /places/:id/rant/:rantId    Delete a rant (comment) about a place     <br />  
GET         *                           404 Error page<br /><br />

## The data made available in this app for restaurants will be<br />
id = Restaurant ID <br />
name = Name of Restaurant<br />
city = location of restaurant<br />
state = state name<br />
cuisines = type of food<br />
pic = picture of restaurant, menu or a dish<br />