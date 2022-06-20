function fazPOST(url, body){
    let request = new XMLHttpRequest()
    console.log("body:" + body)
    request.open("POST",url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText


}



function registraitemServico(event){
    event.preventDefault();
    let url = "http://127.0.0.1:5000/itensdeservico"
    let nome = document.getElementById('nome').value
    let valor = document.getElementById('valor').value
    let tempo = document.getElementById('tempo').value
   


    body = {
        "nome_item":nome,
        "horas":tempo,
        "valor":valor
    }

    fazPOST(url,body)
}


window.addEventListener("DOMContentLoaded", function(event){
    console.log("DOM completamente carregado")
    document.getElementById('registra').addEventListener('submit',registraitemServico)
})