const usermodel = require ("../models/User")


class UserController{

static async getalluser(req,res)
{
var results=await usermodel.getusers();
if(results)
res.send(results)
}




}

module.export=UserController