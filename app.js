const express=require('express');
const mongose=require('mongoose');
const url='mongodb://localhost/AlienDB'

const app=express();
mongose.connect(url,{useNewUrlParser:true});
const con=mongose.connection;
con.on('open',()=>{
    console.log('connected...')
})

app.listen(9000,()=>{
    console.log('server started')
})
app.use(express.json())

const alienrouer=require('./routers/aliens')
app.use('/aliens',alienrouer)
