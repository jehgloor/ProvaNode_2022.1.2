const req = require("express/lib/request")
const Login = require("../model/login")

module.exports = app =>{
    app.get('/login',(req,res) =>{
        
        //res.send('voce esta em Login via get')
        Login.lista(res)
        // console.log(res);
    })

    app.get('/login /:id',(req,res)=>{
        let id = parseInt(req.params.id)
        Login.buscaPorId(id,res)
    })
    app.patch('/login/:id',(req,res)=>{
        let id = parseInt(req.params.id);
        let valores = req.body
        Login.altera(id,valores,res)
        // aqui pode ficar aqui ?
        //Login.deletaPorId(id,res);
    })


    app.post('/login',(req,res)=>{

         //res.send('ola mundo')
        Login.adiciona(req.body,res)
        
       // app.use(express. urlencoded())
        //res.send('email'+ req.body.email+'senha'+req.body.senha)
       
        //return res.redirect('/login')
        // var conteudo = JSON.stringify(req.body);
        // var fs = require('fs');
        // fs.writeFile('nome-do-ficheiro.txt', conteudo, 'utf8', function (err) {
        //   if (err) throw err;
        //   // correr código aqui depois do ficheiro estar gravado
         });

    //     let post = 
    //             {email: req.body.email, 
    //             senha: req.body.senha
    //             }
    //     let sql = 'INSERT INTO login SET ?';
    //     let query = db.query(sql, post, (err, result) => {
    //             if(err) throw err;
    //             res.send("Post added");
    // })


}