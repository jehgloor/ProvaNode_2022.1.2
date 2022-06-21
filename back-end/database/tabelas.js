class Tabelas {

    init(conexao){
        console.log("Banco conectado conectado com sucesso!!!");
        
        this.conexao=conexao;

        this.criaCliente();

        this.criaPrestadorDeServico()

        this.criaServico()
        //this.criaLogin()
        
        
    }

    criaLogin(){
        let sql = 'CREATE TABLE IF NOT EXISTS login'+
            '(id_login INT AUTO_INCREMENT PRIMARY KEY,'+
            'email VARCHAR(200) NOT NULL,'+
            'senha VARCHAR(200) NOT NULL,'+
            'id_cliente_fk INT NOT NULL,'+
            'id_prestadorServico_fk INT NOT NULL,'+
            'foreign key (id_cliente_fk) references cliente(id_cliente),'+
            'foreign key (id_prestadorServico_fk) references prestadorServico(id_prestadorServico));'

            this.conexao.query(sql, erro =>{
                if(erro){
                    console.log(erro);
                }else{
                    console.log('Tabela Login criada com sucesso!');
                }
            })


            

            //console.log(sql);
            
    }


    criaCliente(){
        let sql='create table IF NOT EXISTS cliente'+
            '(id_cliente INT not null auto_increment primary key,'+
            'nome varchar (100) not null,'+
            'cpf varchar(13) not null,'+
            'cep varchar(10),'+
            'rua varchar(200),'+
            'numero INT,'+
            'bairro varchar(200),'+
            'cidade varchar(200),'+
            'uf varchar(200),'+
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

criaServico(){
    let sql = 'create table IF NOT EXISTS servico('+
        'id_servico INT AUTO_INCREMENT NOT NULL PRIMARY KEY,'+
        'total DOUBLE NOT NULL,'+
        'id_itensDeServico INT,'+
        'id_prestadorDeServico INT,'+
        'FOREIGN KEY (id_itensDeServico) REFERENCES itensDeServico(id_itensdeservico),'+
        'FOREIGN KEY (id_prestadorDeServico) REFERENCES prestadorDeServico(id_prestadordeServico))'
       
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela SERVICO criada com sucesso!')
            }

        })
       
}
criaPrestadorDeServico(){
    let sql = 'CREATE TABLE IF NOT EXISTS prestadorDeServico'+
        '(id_prestadordeServico INT AUTO_INCREMENT PRIMARY KEY NOT NULL,'+
        'nome VARCHAR (200) NOT NULL,'+
        'cpf INT NOT NULL,'+
        'email VARCHAR(200) NOT NULL,'+
        'senha VARCHAR(200) NOT NULL)'

        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro);
            }else{
                console.log('Tabela PRESTADOR_DE_SERVICO criado com sucesso!')
            }
        })

        //console.log(sql);           
}

}

module.exports = new Tabelas;