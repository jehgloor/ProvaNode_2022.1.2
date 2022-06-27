function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    alert("Faz get")
    request.send()
    alert(request.responseText)
    return request.responseText
}

function criaLinha(dados){
    let linha = document.createElement("tr")
    let colnomeServico = document.createElement("td")
    let coltempoServico = document.createElement("td")
    let colvalorServico = document.createElement("td")

    colnomeServico.innerHTML = dados.nome_Servico
    colvalorServico.innerHTML = dados.valor_Servico
    coltempoServico.innerHTML = dados.tempo_Servico

    linha.appendChild(colnomeServico)
    linha.appendChild(colvalorServico)
    linha.appendChild(coltempoServico)
    return linha
}

function main(){
    alert("Teste")
    let dados = fazGet("http://localhost:5000/itensdeservico")
    alert("Dados")
    let tabela = document.getElementById('tabela')
    let servicos = JSON.parse(dados)

    servicos.forEach(dados => {
        let linha = criaLinha(dados)
        tabela.appendChild(linha)
    });
}