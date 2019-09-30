const app = require('express')()
const db = require('./config/db')
const consign = require('consign')

consign()
    .then('./config/passaport.js')
    .then('./config/middleware.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(3000, () => {
    console.log('Api up...')
})