const mysql = require ('mysql')

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3310,
    database:"prova2" // ainda tem que criar
})

module.exports = conexao;
