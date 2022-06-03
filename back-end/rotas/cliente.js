const { send } = require("express/lib/response")

module.exports = app =>{
    app.get('/cliente', (req, res)=>{
        res.send('você esta em cliente via get');
    })

}