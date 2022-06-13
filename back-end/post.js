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
    const url = 'http://127.0.0.1:5000/cliente'
    let nome = document.getElementById('nome').value
    let cpf = document.getElementById('cpf').value
    let cep = document.getElementById('cep').value
    let rua = document.getElementById('rua').value
    let numero = document.getElementById('numero').value
    let bairro = document.getElementById('bairro').value
    let cidade = document.getElementById('cidade').value
    let uf = document.getElementById('uf').value
    let email = document.getElementById('email').value


    body = {
        "nome":nome,
        "cpf":cpf,
        "cep":cep,
        "rua":rua,
        "numero":numero,
        "bairro":bairro,
        "cidade":cidade,
        "uf":uf,
        "email":email
        
        
    }
    fazPost(url,body)
}
