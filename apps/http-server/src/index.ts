import express from 'express'
import {client} from "@repo/db/client"
const app = express()

app.get("/",(req,res)=>{
    return res.json({message:"hello from the server"})

})

app.post("/signup",async(req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const result = await client.user.create({
        data:{
            username:username,
            email:email,
            password:password
        }
    })
    return res.json({message:result.id})

})

app.listen(8000,()=>{
    console.log("server started..")
})