function fazPost(url,body){
    let request = new XMLHttpRequest
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        alert(this.responseText)
    }

    return request.responseText
}

function itensdeservico(){
 //   event.preventDefault()
    alert ("Teste")
    const url = 'http://localhost:5000/itensdeservico'
    alert(url)
    let nome = document.getElementById("nomeServico").value
    alert(nome)
    let valor = document.getElementById("valorServico").value
    alert(valor)
    let tempo = document.getElementById("tempoServico").value
    alert(tempo)

    body = {
        "nome_Servico": nome,
        "valor_Servico": valor,
        "tempo_Servico": tempo
    }

    fazPost(url, body)
}