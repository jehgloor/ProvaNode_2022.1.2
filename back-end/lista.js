function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function criaLinha(usuario){
    let linha = document.createElement("tr")
    let colId = document.createElement("td")
    let colNOME = document.createElement("td")
    let colCPF = document.createElement("td")
    let colCEP = document.createElement("td")
    let colRUA = document.createElement("td")
    let colBAIRRO = document.createElement("td")
    let colCIDADE = document.createElement("td")
    let colUF = document.createElement("td")
    let colEMAIL = document.createElement("td")

    colId.innerHTML = dados.id_cliente
    colNOME.innerHTML = dados.nome
    colCPF.innerHTML = dados.cpf
    colCEP.innerHTML = dados.cep
    colRUA.innerHTML = dados.rua
    colBAIRRO.innerHTML = dados.bairro
    colCIDADE.innerHTML = dados.cidade
    colUF.innerHTML = dados.uf
    colEMAIL.innerHTML = dados.email
    linha.appendChild(colId)
    linha.appendChild(colNOME)
    linha.appendChild(colCPF)
    linha.appendChild(colCEP)
    linha.appendChild(colRUA)
    linha.appendChild(colBAIRRO)
    linha.appendChild(colCIDADE)
    linha.appendChild(colUF)
    linha.appendChild(colEMAIL)
}

function main(){
    let dados = fazGet("http//127.0.0.1:5000/cliente")
    let tabela = document.getElementById('table')
    let usuario = JSON.parse(dados)
    usuarios.forEach(element => {
        let criaLinha = (element)
        tabela.appendChild(linha)
        
    });
}

main()


