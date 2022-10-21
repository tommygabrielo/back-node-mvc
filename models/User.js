const db = require("../config/db")
class UserModel{




static async getusers()
{
return new Promise (resolve => {
    db.query("select * from utilisateur", [],(error,result)=>{
        if(!error)
        resolve(result)
    })
})
}






}

module.exports=UserModel