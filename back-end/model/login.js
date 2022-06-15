const conexao = require('../database/connection');

class Login {
    adiciona(login, res){
        let sql = 'INSERT INTO login SET ?'

        conexao.query(sql,login,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
                
            }else{
                res.status(200).json(resultado)
                // console.log(resultado);
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM login'

        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
            
        })
    }
    buscaPorId(id,res){
        let sql = "SELECT * FROM login WHERE id_login=?"

        conexao.query(sql,id,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    altera(id,valores,res){
        let sql = 'UPDATE login SET ? WHERE id_login=?'

        conexao.query(sql,[valores , id],(erro,resultado)=>{

            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    deletaPorId(id,res){
        let sql = 'DELETE * FROM login WHERE id_login=?'

        conexao.query(sql,id,(erro,resultado)=>{
            if (erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })
    }

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


}

module.exports = new Login;