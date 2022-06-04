const res = require('express/lib/response')
const{append} = require('express/lib/response')
const conexao = require('../database/connection')
const cliente = require('../rotas/cliente')

class Cliente{
    adiciona(cliente){
        let sql = 'INSERT INTO cliente SET ?'
        conexao.query(sql, cliente,(erro,resultado) =>{
            if (erro){
                console.log(erro)
            }else{
                console.log(resultado)
            }
        })
    }

    lista(res){
    const sql = 'SELECT * FROM cliente'
    conexao.query(sql,(erro,resultado)=>{
        if(erro){
            res.status(400).json(erro)
        }else{
            res.status(200).json(resultado)
        }
    })
    }
    buscaPorId(id,res){
        let sql = 'SELECT * FROM id=?' //fiquei na duvida se chamo id ou id_cliente!!!
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    altera(id,valores,res){
        let sql = 'UPDATE cliente SET? WHERE id=?'
        conexao.query(sql,[valores, id],(erro,resultado)=>{
            if(erro){
                res.send(400).json(erro)
            }else{
                res.send(200).json(resultado)
            }
        })
    }
}
module.exports = new Cliente

