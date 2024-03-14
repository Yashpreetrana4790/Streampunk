# My first complex backend project

  
*We can't push empty folder in git so in orde r to push we can define file named "git keep."

.gitkeep use to empty 



We can generate the git ignore file.
https://www.toptal.com/developers/gitignore



Set the module based imports.

installing nodemon -- this is dev dependency

npm i -D nodemon 


Creating some important folders inside the src

middlewares models routes utils controllers

install prettier  
as dev dependency.

create .prettierrc 

and also one other file created as .prettierignore to suggest  ignoring prettier


set up mongodb and set the port in env 

no installing dotenv npm

install mongoose express



While connecting to the database it is likely to hit error so better to write in promise syntax or try catch block


Env variables are required everywhere so in order to makes them available at the earliest we can just define the call for  the environment variables in the index.js or the main file



then we would be requireed to install the cookies parser and then cors

cors enable us to cross origin resource sharing.


defining the gloabl middleware using appp.use and declaring app.use(express.json) to enable app to get json data

use express.urlencoded to get the data from the url 
use express.static =  to store the static  images   on own server

app.cookieparser   To enable the app to perform the crud operation on the user's cookies



What is middleware  ?

 

 What is JWT ?

 JWT is a bearer token - who bear it is ownder