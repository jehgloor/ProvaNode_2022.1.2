const conexao = require('../database/connection.js')

class Servicos{
    adiciona(servico,res){
        let sql = 'INSERT INTO servico SET ?'

        conexao.query(sql, servico, (erro,resultado) => {
            if(erro){
                res.status(400).json(erro)
                
            }else{
                res.status(200).json(resultado)
                
            }

        })



    }
    adicionaItem(itens, res){
        let sql = 'INSERT INTO itensdeservico SET ?'

        conexao.query(sql, itens, (erro, resultado) =>{
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultado)
            }
        })
    }

    lista(res){
        let sql = 'SELECT * FROM servico'

        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
    })
    }

    listaitens(res){
        let sql = 'SELECT * FROM itensdeservico'

        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }
            else{
                res.status(200).json(resultado)
            }

        })
    }

    buscaPorPrestador(id_prestador, res){
        let sql = 'SELECT * FROM servico WHERE id_prestadorDeServico=?'

        conexao.query(sql,id_prestador,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }

    })
}
}
module.exports = new Servicos