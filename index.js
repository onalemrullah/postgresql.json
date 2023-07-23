const express=require('express')
const app=express()
const db=require('./config/database')

db.authenticate().then(()=>console.log("Veri tabanına bağlandı")).catch((err)=>console.log(err))
app.use("/users",require('./router/userrouter'))

app.listen(3000,()=>{
    console.log("3000 portu dinleniyor.")
})