function fazGET(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(dados){
    let linha = document.createElement("tr")
    let colNOMEITEM = document.createElement("td")
    let colTEMPO = document.createElement("td")
    let colVALOR = document.createElement("td")

    colNOMEITEM.innerHTML = dados.nome_item
    colVALOR.innerHTML = dados.valor
    colTEMPO.innerHTML = dados.horas

    linha.appendChild(colNOMEITEM)
    linha.appendChild(colVALOR)
    linha.appendChild(colTEMPO)
    return linha
     

}




function main(){
    let dados = fazGET("http://localhost:5000/itensdeservico")
    let tabela = document.getElementById('tabela')
    let servicos = JSON.parse(dados)

    servicos.forEach(dados => {
        let linha = criaLinha(dados)
        tabela.appendChild(linha)
    });
}

main()