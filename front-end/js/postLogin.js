
function fazPost(url,body){

    // XMLHttpRequest : fornece funcionalidade ao cliente para transferir 
    // dados entre um cliente e um servidor. Ele fornece uma maneira fácil 
    // de recuperar dados de um URL sem ter que fazer uma atualização de 
    // página inteira. Isso permite que uma página da Web atualize apenas 
    // uma parte do conteúdo sem interromper o que o usuário esteja fazendo.
    let request = new XMLHttpRequest();

    //configurando a request:
    request.open("POST" , url, true);
    request.setRequestHeader("Content-type","application/json")
    //pega uma string e garante q ela ta em formato json;
    request.send(JSON.stringify(body));

   
    request.onload = function (){
         //responseText retorna o texto recebido de um servidor após o envio de uma 
         //solicitação.
         //valor : Uma string que contém os dados textuais recebidos usando
        // XMLHttpRequestou nullse a solicitação falhou ou ""se a solicitação 
        //ainda não foi enviada por chamada send().
        console.log(this.responseText);
    }
    return request.responseText;
}



// fazendo um post :
function consultaLogin(event){
    event.preventDefault();
    //declara minha url
    const url = 'http://127.0.0.1:5000/login'

    //acessar os valores do campo do html
    let email = document.getElementById('email_login').value;
    let senha = document.getElementById('senha_login').value;


    //json
    body = {
        "email":email,
        "senha":senha,
        //coloquei para testar , mas depois tem q adaptar para nossa regra de negocio
       "id_cliente_fk" : "1",
       "id_prestadorServico_fk":"1"
    }


    fazPost(url,body)
    return false;
}

window.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM completamente carregado e analisado");
    document.getElementById('enviarLogin').addEventListener('submit',consultaLogin);
});
