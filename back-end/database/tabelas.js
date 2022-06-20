class Tabelas {

    init(conexao){
        console.log("Banco conectado conectado com sucesso!!!")
        this.conexao=conexao
        this.criaPrestadorDeServico()//aqui
        
    }

    criaPrestadorDeServico(){
        let sql = 'CREATE TABLE IF NOT EXISTS prestadorDeServico'+
            '(id_prestadorServico INT AUTO_INCREMENT PRIMARY KEY,'+
            'nome VARCHAR (200) NOT NULL,'+
            'cpf INT NOT NULL,'+
            'email VARCHAR(200) NOT NULL,'+
            'senha VARCHAR(200) NOT NULL)'

            this.conexao.query(sql, erro => {
                if(erro){
                    console.log(erro);
                }else{
                    console.log('Tabela Cadastro criada com sucesso!')
                }
            })

            //console.log(sql);           
    }

}

module.exports = new Tabelas