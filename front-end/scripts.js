
const conexao = require("../back-end/database/connection")
const { lista } = require("../back-end/model/servico")

const Servicos = require ("../back-end/model/servico")

function mostrabanco(){
    
  

    
    document.getElementById('id').value = lista()
}