module.exports = app => {
    app.get('/servicos', (req,res) => {
        res.send("Voce esta em SERVICOS via GET")
    })

    app.post('/servicos', (req,res) => {
        res.send("Voce esta em SERVICOS via POST")
    })
}