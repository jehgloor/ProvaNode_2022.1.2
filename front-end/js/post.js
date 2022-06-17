function fazPost(url,body){
    let request = new XMLHttpRequest
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText
}

function itensdeservico(){
 //   event.preventDefault()
    const url = 'http://localhost:5000/itensdeservico'
    let nome = document.getElementById("nome").value
    let id = parseInt (document.getElementById("id").value)
    let valor = document.getElementById("valor").value
    let tempo = document.getElementById("tempo").value
    console.log(nome)
    console.log(id)
    console.log(valor)
    console.log(tempo)

    body = {
        "nome": nome,
        "id": id,
        "valor": valor,
        "tempo": tempo
    }

    fazPost(url, body)
}