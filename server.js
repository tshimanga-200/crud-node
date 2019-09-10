require ('./models/db');
//inclusion des modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
const path = require('path');

//port
const port = process.env.PORT || 3000;

//midlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs', exhbs({ extname: 'hbs', defaultLayout: 'mainLayout',layoutsDir: __dirname+'/views/layouts'}));
app.use(express.static(path.join(__dirname,'/public')));
app.set('view engine','hbs');

//routers
const studentController = require('./routeControllers/studentController'):
app.use('/student', studentController);

app.listen(port,()=>{
    console.log(`Notre serveur est en écoute sur le port ${port}`);
});