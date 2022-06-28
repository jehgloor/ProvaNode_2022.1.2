const Servicos = require('../model/servicos')

module.exports = app => {
    //GETS
    app.get('/servicos', (req,res) => {
        Servicos.lista(res)
        //res.send("Voce esta em SERVICOS via GET")
    })

    app.get('/servicos/:id_prestadorDeServico',(req,res) =>{
        let idPrestador = parseInt(req.params.id_prestadorDeServico)
        Servicos.buscaPorPrestador(idPrestador,res)
    })


    //POSTS
    app.post('/servicos', (req,res) => {
        console.log(req.body)
        Servicos.adiciona(req.body,res)
        // res.send("Voce esta em SERVICOS via POST")
    })
}