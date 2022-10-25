const express= require('express')
const mydb=require('./config/db')
const app = express();
const rout=require("./routes/router")
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(rout);
app.listen(5000,()=>{
    console.log('server running')
})