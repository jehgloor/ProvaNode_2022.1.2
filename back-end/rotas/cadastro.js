const req = require("express/lib/request")
const PrestadorDeServico = require("../model/cadastro")

module.exports = app =>{
    app.get('/prestadorDeServico',(req,res) =>{
        
        //res.send('voce esta em Login via get')
        PrestadorDeServico.lista(res)
        // console.log(res);
    })

    app.get('/prestadorDeServico/:id',(req,res)=>{
        let id = parseInt(req.params.id)
        PrestadorDeServico.buscaPorId(id,res)
    })
    app.patch('/prestadorDeServico/:id',(req,res)=>{
        let id = parseInt(req.params.id);
        let valores = req.body
        PrestadorDeServico.altera(id,valores,res)
    })
    app.post('/prestadorDeServico',(req,res)=>{
        //res.send('ola mundo')
        PrestadorDeServico.adiciona(req.body,res)
    })

}