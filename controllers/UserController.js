const usermodel = require ("../models/User")

//recevoir tout les utilisateurs
module.exports.getalluser = (req,res) => {
    console.log("tafa");
    usermodel.getalluser ( (err,resp) => {
        if (!err){
            res.send(resp)
        }
        else {
            res.send(err)
        }
    })
}


//ajouter utilisateur
module.exports.addnewuser = (req,res) => {
   var NOM_UTILISATEUR = req.body.NOM_UTILISATEUR;
   var MOT_DE_PASS = req.body.MOT_DE_PASS;
    usermodel.addnewuser (NOM_UTILISATEUR,MOT_DE_PASS, (err,resp) => {
        if (!err){
            res.send(resp)
        }
        else {
            res.send(err)
        }
    })
}

module.exports.deleteuser = (req,res) => {
    var ID_UTILISATEUR = req.body.ID_UTILISATEUR;
    
     usermodel.deleteuser (ID_UTILISATEUR, (err,resp) => {
         if (!err){
             res.send("supprimé")
         }
         else {
             res.send(err)
         }
     })
 }

 //modification utilisateur
module.exports.updateuser = (req,res) => {
    var ID_UTILISATEUR = req.body.ID_UTILISATEUR;
    var NOM_UTILISATEUR = req.body.NOM_UTILISATEUR;
    var MOT_DE_PASS = req.body.MOT_DE_PASS;
     usermodel.updateuser (ID_UTILISATEUR,NOM_UTILISATEUR,MOT_DE_PASS, (err,resp) => {
         if (!err){
             res.send(resp)
         }
         else {
             res.send(err)
         }
     })
 }