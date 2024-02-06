const express = require("express")

const app = express()

app.get("/message/:id/:user", (request,response)=>{ 

    const {id,user} = request.params
    response.send(`Id da mensagem: ${id} do user: ${user}.`)
})

app.get("/users",(req,res)=>{
    const {page,limit} = req.query

    res.send(`Pagina: ${page} e limite: ${limit}`)
})

const PORT = 3333

app.listen(PORT, () => {console.log(`Server is running on Port ${PORT}`)})