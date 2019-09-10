//inclusion du module mongoose
const mongoose = require('mongoose')
//creation du shamat de la collection
const studentShemat = new mongoose.Schema({
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    age: {
        type: String
    }
})
mongoose.model('students', studentShemat)