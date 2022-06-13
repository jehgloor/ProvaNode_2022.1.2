function fazGet(url){
    let request = new XMLHttpRequest
    request.open("GET",url,false)
    request.send()
    return request.responseText
}


function criaLinha(dados){
    let linha = document.createElement("tr");
    let colunaId = document.createElement("td");
    let colunaEmail = document.createElement("td");


    colunaId.innerHTML = dados.id_login;
    colunaEmail.innerHTML = dados.email;


    linha.appendChild(colunaId)
    linha.appendChild(colunaEmail);

    let resp = document.getElementById('resposta').style.color = "white"
    resp = linha

    console.log(resp);
    return resp;

}
function main(){
    let dados = fazGet("http://127.0.0.1:5000/login")

    //pegar o componente inteiro da tabela que esta no html
    let tabela = document.getElementById('listagemDeLogin')

    let usuarios = JSON.parse(dados);
    console.log(usuarios);
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
        
    });
}


main();
