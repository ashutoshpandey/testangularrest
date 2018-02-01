NodeJS project is generated using yeoman generator
http://ashutoshpandey.in/generators-node-js/

AngularJS files are present in public/front folder

NodeJS files are present in app, config folders

Backend - NodeJS
-----------------
All backend controllers are placed in app/controllers folder
All backend services are placed in app/services folder
All backend views are placed in app/views folder
util/constants.js contains all the backend constants

config/config.js contains backend configuration
config/express.js contains NodeJS express configuration

We are using external .env file to read configuration constant values

Following line in config/express.js will assume that all front end files are placed inside public folder:
app.use(express.static(path.join(root, 'public')));

Frontend - AngularJS
---------------------
All angular controllers, services and configs are placed in public/front folder

Steps to Setup
---------------
Make sure node/npm installed

1. git clone https://ashutoshpandey@bitbucket.org/ashutoshpandey/testangularrest.git
2. cd testangularrest
3. npm install
4. bower install
5. node app.js

API To Call
------------
http://localhost:3000/user/read