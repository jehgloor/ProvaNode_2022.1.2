module.exports = app =>{
    app.get('/login',(req,res) =>{
        res.send('voce esta em Login via get')
    })
}