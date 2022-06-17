class Tabelas {

    init(conexao){
        console.log("Banco conectado conectado com sucesso!!!")
        this.conexao=conexao
        this.criaItensdeservico()//aqui

    }

    criaItensdeservico(){
        let sql = 'CREATE TABLE IF NOT EXISTS itensDeServico'+
            '(id_itensServico INT AUTO_INCREMENT PRIMARY KEY,'+
            'nome_Servico VARCHAR (200) NOT NULL,'+
            'valor_Servico INT NOT NULL,'+
            'tempo_Servico INT NOT NULL)'

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