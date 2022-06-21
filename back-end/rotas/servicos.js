const Servicos = require('../model/servicos')

module.exports = app => {
    //GETS
    app.get('/servicos', (req,res) => {
        Servicos.lista(res)
        //res.send("Voce esta em SERVICOS via GET")
    })

    app.get('/servicos/:id_prestadorDeServico',(req,res) =>{
        let idCliente = parseInt(req.params.id_prestadorDeServico)
        Servicos.buscaPorPrestador(idCliente,res)
    })

    app.get('/itensdeservico', (req, res) =>{
        Servicos.listaitens(res)
    })


    //POSTS
    app.post('/servicos', (req,res) => {
        console.log(req.body)
        Servicos.adiciona(req.body,res)
        // res.send("Voce esta em SERVICOS via POST")
    })

    app.post('/itensdeservico', (req, res) => {
        console.log(req.body)
        Servicos.adicionaItem(req.body,res)
    })
}