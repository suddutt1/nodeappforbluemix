#Web Application Teamplate
This application contains a very simple  node js application that serves a set of html page. This application could be executed from Bluemix. The applicatio architectre is as following
UI ( Developed in Angular, UI Bootstarp and HTML5) -> REST web service Calls to back end for data) . Back end could be developed using java/Node etc. 

### To start a project from scratch issue the following commands
```sh
mkdir <appdir>
cd <appdir>
npm init
npm install angular --save
npm install angular-route --save
npm install angular-animate --save
npm install angular-ui-bootstrap --save
npm install connect --save
npm install serve-static --save
```
### Download bootstap.min.js from and place is to css folder http://netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css
### Develop the index.js ( The node server to serve the html and js files)
### Change the package.json to add start script like the following and remove the main attribute if existing 
```sh
  "start": "node index.js",
  
```
### Create the initial index.html
