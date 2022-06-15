const express = require ('express')
const consign = require ('consign')
const bodyparser = require ('body-parser')
const cors = require ('cors')
module.exports = () => {
    const app = express()

    app.use(bodyparser.urlencoded({extended:true}))
    app.use(bodyparser.json())
    app.use(cors())
    consign().include('./back-end/rotas').into(app)

    return app
}
