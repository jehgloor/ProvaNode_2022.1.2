const Servicos = require('../model/servicos')

module.exports = app => {
    app.get('/servicos', (req,res) => {
        Servicos.lista(res)
        //res.send("Voce esta em SERVICOS via GET")
    })

    app.get('/servicos/:id_prestadorDeServico',(req,res) =>{
        let idCliente = parseInt(req.params.id_prestadorDeServico)
        Servicos.buscaPorPrestador(idCliente,res)
    })

    app.post('/servicos', (req,res) => {
        console.log(req.body)
        Servicos.adiciona(req.body,res)
        // res.send("Voce esta em SERVICOS via POST")
    })
}