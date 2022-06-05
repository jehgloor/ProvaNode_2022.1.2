const req = require("express/lib/request")
const cadastro = require("../model/cadastro")
const Login = require("../model/cadastro")

module.exports = app =>{
    app.get('/cadastro',(req,res) =>{
        
        //res.send('voce esta em Login via get')
        Login.lista(res)
        // console.log(res);
    })

    app.get('/cadastro /:id',(req,res)=>{
        let id = parseInt(req.params.id)
        Login.buscaPorId(id,res)
    })
    app.patch('/cadastro/:id',(req,res)=>{
        let id = parseInt(req.params.id);
        let valores = req.body
        Login.altera(id,valores,res)
    })
    app.post('/cadastro',(req,res)=>{
        //res.send('ola mundo')
        cadastro.adiciona(req.body,res)
    })

}