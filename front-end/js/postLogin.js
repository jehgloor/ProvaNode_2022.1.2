
function fazGet(url){
    let request = new XMLHttpRequest
    request.open("GET",url,false)
    request.send()

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText

}

function consultaLogin(event){
    event.preventDefault();
 
    //acessar os valores do campo do html
    let email = document.getElementById('email_login').value;
    let senha = document.getElementById('senha_login').value;
    let tipo = document.getElementById('tipo').value;

    console.log("entrando na função consulta login");
    const url = 'http://127.0.0.1:5000/login/'+tipo+'/'+email

    let dados =  fazGet(url);
    let usuarios = JSON.parse(dados);
    let senhaBanco = "";

    
   
        let cont = 0;
        usuarios.forEach(element => {
            console.log(element);
            senhaBanco = element.senha;
            cont ++;
        });
    
        if(cont == 0){
            if(tipo == "cliente"){
                alert("Usuário não encontrado, por favor faça seu cadastro")
                window.location.href = '../front-end/cliente.html'
            }
            else if(tipo == "prestador"){
                alert("Prestador não encontrado, por favor faça seu cadastro")
                window.location.href = '../front-end/prestadorServico.html'
            }
            
        }else{
            if(senha == senhaBanco){
 
                window.location.href = '../front-end/listaitensdeservico.html'
                alert("Usuário logado com sucesso")
            }else{
                alert("Senha incorreta!")
            }
        }
    
   
    
}

window.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM completamente carregado e analisado");
    document.getElementById('enviarLogin').addEventListener('submit',consultaLogin);
});
