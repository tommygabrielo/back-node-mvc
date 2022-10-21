const mysql=require('mysql')

const db= mysql.createPool({
    "host":"localhost",
    "username":"root",
    "password":"",
    "database":"ttm"
});

db.getConnection(()=>{
    console.log('connect to db successfuly');
})

module.exports=db;