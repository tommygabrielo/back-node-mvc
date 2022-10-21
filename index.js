const express= require('express')
const mydb=require('./config/db')
const app = express();
const rout=require("./routes/router")

app.use(rout)
app.listen(5000,()=>{
    console.log('server running')
})