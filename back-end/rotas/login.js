const req = require("express/lib/request")
const Login = require("../model/login")

module.exports = app =>{
    app.get('/login',(req,res) =>{
        
        //res.send('voce esta em Login via get')
        Login.lista(res)
        // console.log(res);
    })

    app.get('/login /:id',(req,res)=>{
        let id = parseInt(req.params.id)
        Login.buscaPorId(id,res)
    })
    app.patch('/login/:id',(req,res)=>{
        let id = parseInt(req.params.id);
        let valores = req.body
        Login.altera(id,valores,res)
        // aqui pode ficar aqui ?
        //Login.deletaPorId(id,res);
    })


    app.get('/login/:tipo/:email',(req,res)=>{
        let email = req.params.email;
   
        console.log(`email ${email}`);
        console.log(req.params);
        if(req.params.tipo == "cliente"){
            Login.buscaPorEmail(email,res);
        }


       
        if(req.params.tipo == "prestador"){

            Login.buscaPorEmailPrestador(email,res);
        }
       



    })

   
       




}