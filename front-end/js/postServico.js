function fazPOST(url, body){
    let request = new XMLHttpRequest()
    console.log("body:" + body)
    request.open("POST",url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }
    window.location.href = '../front-end/servicoLista.html'
    return request.responseText


}



function registraServico(event){
    event.preventDefault();
    let url = "http://127.0.0.1:5000/servicos"
    let valor = document.getElementById('total').value
    let idITEM = document.getElementById('itens').value
    let idPRESTADOR = document.getElementById('prestador').value
    
    


    body = {
        "total" : valor,
        "id_itensdeservico" : idITEM,
       "id_prestadordeservico" : idPRESTADOR
    }

    fazPOST(url,body)
}

window.addEventListener("DOMContentLoaded", function(event){
    console.log("DOM carregado")
    document.getElementById('registra').addEventListener('submit',registraServico)
} )