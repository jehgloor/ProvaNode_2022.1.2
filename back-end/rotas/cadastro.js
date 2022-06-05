const req = require("express/lib/request")
const Login = require("../model/cadastro")

module.exports = app =>{
    app.get('/cadastro',(req,res) =>{
        
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
    })
    app.post('/login',(req,res)=>{
        //res.send('ola mundo')
        Login.adiciona(req.body,res)
    })

}