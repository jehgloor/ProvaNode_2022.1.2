const req = require("express/lib/request")
const Login = require("../model/login")

module.exports = app =>{
    

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