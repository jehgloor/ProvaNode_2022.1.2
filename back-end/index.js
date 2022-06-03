const customExpress = require ('./configuracao/customExpress')

const app = customExpress()

app.listen(5000,() => console.log('Servidor ativo na porta 5000'))