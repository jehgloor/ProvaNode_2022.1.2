const customExpress = require('./configuracao/customExpress');
const app = customExpress();
app.listen(5000,()=>console.log('servidor ativo na porta 5000'))