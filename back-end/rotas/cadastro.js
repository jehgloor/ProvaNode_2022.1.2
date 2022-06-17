const req = require("express/lib/request")
const itensdeservico = require("../model/cadastro")

module.exports = app =>{
    app.get('/itensdeservico',(req,res) =>{

        //res.send('voce esta em Login via get')
        itensdeservico.lista(res)
        // console.log(res);
    })

    app.get('/itensdeservico/:id',(req,res)=>{
        let id = parseInt(req.params.id)
        itensdeservico.buscaPorId(id,res)
    })
    app.patch('/itensdeservico/:id',(req,res)=>{
        let id = parseInt(req.params.id);
        let valores = req.body
        itensdeservico.altera(id,valores,res)
    })
    app.post('/itensdeservico',(req,res)=>{
        //res.send('ola mundo')
        itensdeservico.adiciona(req.body,res)
    })

}