const customExpress = require ('./configuracao/customExpress')
const conexao = require ('./database/connection')
const tabelas = require('./database/tabelas')



conexao.connect(erro =>{
    if(erro){
        console.log('Erro na conexão com o banco'+erro)
    }else{
        console.log("conectado ao banco com sucesso");
        tabelas.init(conexao)

        const app = customExpress()
        app.listen(5000,() => console.log('Servidor ativo na porta 5000'))
    }
})

