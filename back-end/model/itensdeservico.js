const conexao = require('../database/connection');

class itensdeservico {
    adiciona(cadastro, res){
        let sql = 'INSERT INTO itensdeservico SET ?'

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
        const sql = 'SELECT * FROM itensdeservico'

        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }

        })
    }
    buscaPorId(id,res){
        let sql = "SELECT * FROM itensdeservico WHERE id=?"

        conexao.query(sql,id,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    altera(id,valores,res){
        let sql = 'UPDATE itensdeservico SET ? WHERE id=?'

        conexao.query(sql,[valores , id],(erro,resultado)=>{

            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new itensdeservico





