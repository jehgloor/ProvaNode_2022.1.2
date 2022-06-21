const conexao = require('../database/connection');

class PrestadorDeServico {
    adiciona(cadastro, res){
        let sql = 'INSERT INTO prestadorDeServico SET ?'

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
        const sql = 'SELECT * FROM prestadorDeServico'

        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
            
        })
    }
    buscaPorId(id,res){
        let sql = "SELECT * FROM prestadorDeServico WHERE id=?"

        conexao.query(sql,id,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    altera(id,valores,res){
        let sql = 'UPDATE prestadorDeServico SET ? WHERE id=?'

        conexao.query(sql,[valores , id],(erro,resultado)=>{

            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new PrestadorDeServico