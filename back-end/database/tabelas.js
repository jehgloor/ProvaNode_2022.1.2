class Tabelas {

    init(conexao){
        console.log("Banco conectado conectado com sucesso!!!");

        this.conexao=conexao;

        this.criaLogin()//aqui
        
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

}

module.exports = new Tabelas;