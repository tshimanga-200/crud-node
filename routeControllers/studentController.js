//inclusion de module
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Student = mongoose.model('students') 

//route de la racine en get
router.get('/',(request,response,next)=>{
    response.render('student/addStudent',{
        viewTitle: 'AJOUTER UN ETUDIANT'
    })
})
//route de la racine en post
router.post('/',(request,response,next)=>{
    insertStudent(request, response, next)
})

// la fonction qui sera appeller lorcequ'on va poster les données
function insertStudent(request,response,next){
    let student = new Student()
    student.nom = request.body.nom
    student.prenom = request.body.prenom
    student.age = request.body.age
    student.save((error,document)=>{
        if(!error){
            response.redirect('student/listStudent')
        }else{
            console.log(`error : ${error}`)
        }
    })
}
//route de la racine en get lorcequ'on va afficher les données
router.get('/listStudent',(request,response,next)=>{
    Student.find((error,documents)=>{
        if(!error){
            response.render('student/listStudents',{
                list: documents,
                viewTitle: 'LISTE DE TOUS LES ETUDIANTS'
            })
        }else{
            console.log(`error : ${error}`)
        }
    })
})
//route de la racine en get lorcequ'on vait recuperer l'enregitrement qu'on vait modifier
router.get('/:id',(request,response,next)=>{
    Student.findById(request.params.id, (error, document)=>{
        if(!error){
            response.render('student/updateStudent',{
                viewTitle:'MODIFIER CET ETUDIANT',
                student: document
            })
        }else{
            console.log(`error: ${error}`)
        }
    })
})
//route pour modifier un enregistrement
router.post('/updateStudent',(request,response,next)=>{
    updateStudent(request,response,next)
})
//la fonction qui va supprimer un enregistrement
function updateStudent(request,response,next){
    Student.findOneAndUpdate({_id: request.body._id}, request.body,{new: true},(error,document)=>{
        if(!error){
            response.redirect('/student/listStudent')
        }else{
            console.log(`error : ${error}`)
        }
    })
}
//route pour la suppression
router.get('/delete/:id',(request,response,next)=>{
    Student.findByIdAndRemove(request.params.id,(error,document)=>{
        if(!error){
            response.redirect('/student/listStudent')
        }else{
            console.log(`error : ${error}`)
        }
    })
})
module.exports = router