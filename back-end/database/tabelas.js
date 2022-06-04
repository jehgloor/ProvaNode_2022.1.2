class Tabelas{
    init(conexao){
        console.log('banco conectado com sucesso!');
        this.conexao = conexao;
        this.criaCliente()
        }
        criaCliente(){
                let sql='create table IF NOT EXISTS cliente'+
                    '(id_cliente INT not null auto_increment primary key,'+
                    'nome varchar (100) not null,'+
                    'cpf INT not null,'+
                    'cep varchar(10),'+
                    'rua varchar(200),'+
                    'numero INT,'+
                    'email varchar(200),'+
                    'senha varchar(16) )';
            
                    this.conexao.query(sql, erro => {
                        if(erro){
                            console.log(erro)
                        }else{
                            console.log('Tabela CLIENTE criada com sucesso!')
                        }

                })
        }
}
module.exports = new Tabelas;