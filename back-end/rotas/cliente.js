const { send } = require("express/lib/response");
const cliente = require("../model/cliente");

module.exports = app =>{
    app.get('/cliente', (req, res)=>{
        //res.send('Você está em cliente via get!')
        cliente.lista(res)
        
    })
    app.get('/cliente/ :id',(req,res)=>{
        let id = parseInt(req.params.id)
        cliente.buscaPorId(id,res)
    })
    app.post('/cliente',(req,res)=>{   
        cliente.adiciona(req.body)
        res.send('Você esta em cliente via post!')
    })
    app.patch('/cliente/ :id',(req,res)=>{
        let id = parseInt(req.params.id)
        let valores = req.body
        cliente.altera(id, valores,res)
    })

    

}

//     app.post('/carteira', (req,res) => {
      
//         if(req.body.saldo<=0){
//             res.send('saldo insuficiente')
//             console.log("saldo insuficiente");
//         }else{
//             res.send('Você esta em CARTEIRA via POST');
//             console.log(req.body);
//             Carteira.adiciona(req.body);
//         }
        
//     })

// }
