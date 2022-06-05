const conexao = require('../database/connection');

class Cadastro {
    adiciona(cadastro, res){
        let sql = 'INSERT INTO cadastro SET ?'

        conexao.query(sql,cadastro,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
                
            }else{
                res.status(200).json(resultado)
                // console.log(resultado);
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM cadastro'

        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
            
        })
    }
    buscaPorId(id,res){
        let sql = "SELECT * FROM cadastro WHERE id=?"

        conexao.query(sql,id,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    altera(id,valores,res){
        let sql = 'UPDATE cadastro SET ? WHERE id=?'

        conexao.query(sql,[valores , id],(erro,resultado)=>{

            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new Cadastro