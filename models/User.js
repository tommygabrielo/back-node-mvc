const db = require("../config/db")

let utilisateur = function (utilisateur){
    this.ID_UTILISATEUR = utilisateur.ID_UTILISATEUR
    this.NOM_UTILISATEUR = utilisateur.NOM_UTILISATEUR
    this.MOT_DE_PASS = utilisateur.MOT_DE_PASS
}

utilisateur.getalluser = (result) => 
{
    db.query("select * from utilisateur", (err,res)=>{
        if(err){
            result(err, null)
        }else {
            result(null,res)
        }
    })
}

utilisateur.addnewuser = (NOM_UTILISATEUR,MOT_DE_PASS,result) => 
{
    db.query("insert into utilisateur(NOM_UTILISATEUR,MOT_DE_PASS) values (?,?) ", [NOM_UTILISATEUR,MOT_DE_PASS], (err,res)=>{
        if(err){
            result(err, null)
        }else {
            result(null,{message:`Ajout avec succes id: ${res.insertId}`})
        }
    })

}

utilisateur.deleteuser = (ID_UTILISATEUR,result) => 
{
    db.query("delete from utilisateur where ID_UTILISATEUR = ? ", [ID_UTILISATEUR], (err,res)=>{
        if(err){
            result(err, null)
        }else {
            result(null,{message:`suppression avec succes`})
        }
    })

}

utilisateur.updateuser = (ID_UTILISATEUR,NOM_UTILISATEUR,MOT_DE_PASS,result) => 
{
    db.query("update  utilisateur set NOM_UTILISATEUR=? ,MOT_DE_PASS=? where ID_UTILISATEUR=? ", [NOM_UTILISATEUR,MOT_DE_PASS,ID_UTILISATEUR], (err,res)=>{
        if(err){
            result(err, null)
        }else {
            result(null,{message:`Modification avec succes`})
        }
    })

}

module.exports=utilisateur