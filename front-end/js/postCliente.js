function fazPost(url,body){

    let request = new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader("content-type", "application/json")
    request.send(JSON.stringify(body))
    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText
}
function cadastraUsuario(){
    // event.preventDefault();
    const url = 'http://127.0.0.1:5000/cliente'
    //let id = document.getElementById('id_cliente').value
    let nome = document.getElementById('nome').value
    let cpf = document.getElementById('cpf').value
    let cep = document.getElementById('cep').value
    let rua = document.getElementById('rua').value
    let numero = document.getElementById('numero').value
    let bairro = document.getElementById('bairro').value
    let cidade = document.getElementById('cidade').value
    let uf = document.getElementById('uf').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value


    body = {
       
        "nome":nome,
        "cpf":cpf,
        "cep":cep,
        "rua":rua,
        "numero":numero,
        "bairro":bairro,
        "cidade":cidade,
        "uf":uf,
        "email":email,
        "senha":senha
        
        
    }
    fazPost(url,body)

}
window.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM completamente carregado e analisado");
    document.getElementById('enviarCliente').addEventListener('submit',cadastraUsuario);
  });