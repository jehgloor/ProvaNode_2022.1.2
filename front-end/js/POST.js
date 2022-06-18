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



function registraServico(){
    let url = "http://127.0.0.1:5000/servicos"
    let valor = document.getElementById('total').value
    let idITEM = document.getElementById('itens').value
    let idPRESTADOR = document.getElementById('prestador').value
    
    


    body = {
        "total":valor,
        "id_itensdeservico":idITEM,
       "id_prestadoredeservico":idPRESTADOR
    }

    fazPOST(url,body)
}