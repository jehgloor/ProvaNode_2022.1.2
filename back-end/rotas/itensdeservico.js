module.exports = app => {
    app.get('/itensdeservico',(req,res) => {
        res.send('voce esta em itensdeserevico via get')
   })
}



