// inclusion du module mongoose
const mongoose = require ('mongoose')
//utilisation de l'objet mongoose pour s'est connecté à la base de donnée
mongoose.connect('mongodb://localhost:27017/monNode',{ useNewUrlParser : true},(error)=>{
    if(error){
        console.log('la connection a echoué')
    }else{
        console.log('la connection a reussit')
    }
})
//inclusion du fichier studentModel pour le lié avec la connexion à la base de donnée
require('./studentModel')