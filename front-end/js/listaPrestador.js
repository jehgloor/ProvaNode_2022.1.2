function fazGet(url){
    let request = new XMLHttpRequest
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(dados){
    let linha = document.createElement("tr")
    let colId = document.createElement("td")
    let colNome = document.createElement("td")
    let colCpf = document.createElement("td")
    let colEmail = document.createElement("td")
    let colSenha = document.createElement("td")
    colId.innerHTML = dados.id_prestadordeServico
    colNome.innerHTML = dados.nome
    colCpf.innerHTML = dados.cpf
    colEmail.innerHTML = dados.email
    colSenha.innerHTML = dados.senha

    linha.appendChild(colId)
    linha.appendChild(colNome)
    linha.appendChild(colCpf)
    linha.appendChild(colEmail)
    linha.appendChild(colSenha)
    return linha
}

function main(){
    let dados = fazGet("http://127.0.0.1:5000/prestadorDeServico")
    let tabela = document.getElementById('table')
    let usuarios = JSON.parse(dados)
    usuarios.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)
    });
}
main()