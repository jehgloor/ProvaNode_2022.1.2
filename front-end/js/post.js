    function fazPost(url, body){
        let request = new XMLHttpRequest
        request.open("POST", url, true)
        request.setRequestHeader("Content-type", "application/json")
        request.send(JSON.stringify(body))

        request.onload = function(){
            console.log(this.responseText)
        }

        return request.responseText
    }

    function prestadorDeServico(){
     //   event.preventDefault()
        const url = 'http://localhost:5000/prestadorDeServico'
        let nome = document.getElementById("nome").value
        let cpf = parseInt (document.getElementById("cpf").value)
        let email = document.getElementById("email").value
        let senha = document.getElementById("senha").value
        console.log(nome)
        console.log(cpf)
        console.log(email)
        console.log(senha)

        body = {
            "nome": nome,
            "cpf": cpf,
            "email": email,
            "senha": senha
        }

        fazPost(url, body)
    }