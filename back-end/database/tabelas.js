
class Tabelas {

    init(conexao){
        console.log("Conexão com o banco iniciada")

        this.conexao = conexao
        this.criaServico()
    }

    criaServico(){
        let sql = 'create table IF NOT EXISTS servico('+
            'id_servico INT AUTO_INCREMENT NOT NULL PRIMARY KEY,'+
            'total DOUBLE NOT NULL,'+
            'id_itensDeServico INT,'+
            'id_prestadorDeServico INT,'+
            'FOREIGN KEY (id_itensDeServico) REFERENCES itensDeServico(id_itensDeServico),'+
            'FOREIGN KEY (id_prestadorDeServico) REFERENCES prestadorDeServico(id_prestadorDeServico))'
           
            this.conexao.query(sql, erro => {
                if(erro){
                    console.log(erro)
                }else{
                    console.log('Tabela SERVICO criada com sucesso!')
                }

            })
           
    }
}

module.exports = new Tabelas;