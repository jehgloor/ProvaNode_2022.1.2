function fazGET(url){
    let request = new XMLHttpRequest
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(dados){
    let linha = document.createElement("tr")
    let colPRESTADOR = document.createElement("td")
    let colITEM = document.createElement("td")
    let colVALOR = document.createElement("td")

    colPRESTADOR.innerHTML = dados.id_prestadorDeServico
    colITEM.innerHTML = dados.id_itensDeServico
    colVALOR.innerHTML = dados.total

    linha.appendChild(colPRESTADOR)
    linha.appendChild(colITEM)
    linha.appendChild(colVALOR)
    return linha
     

}




function main(){
    let prestador = parseInt(document.getElementById('prestador').value)

    let dados = fazGET("http://localhost:5000/servicos/"+prestador)
    let tabela = document.getElementById('tabela')
    let servicos = JSON.parse(dados)

    servicos.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)
    });
}

main()