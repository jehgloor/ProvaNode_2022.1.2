const conexao = require('../database/connection');

class Login {

    buscaPorEmail(email,res){
        let sql = "SELECT email,senha FROM cliente WHERE email=?"

        conexao.query(sql,email ,(erro,resultado)=>{
            if (erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })
    }
    // tem que pegar do matheus 
    buscaPorEmailPrestador(email,res){
        let sql = "SELECT email,senha FROM prestadorDeServico WHERE email=?"

        conexao.query(sql,email ,(erro,resultado)=>{
            if (erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })
    }


}

module.exports = new Login;