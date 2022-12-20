const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(cors())

app.set('port', 9000)

const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'unab',
    password: 'Mintic2022',
    database: 'library'
}

// -------------middelwares-------------------------
app.use( myconn(mysql, dbOptions, 'single') )
app.use( express.json() )

// ----------------Routes------------------------
app.get('/', (req, res) => {
    res.send('Welcome to my APP 2022 UNAB')
})

app.use('/api', routes)

app.listen(app.get('port'), () => {
    console.log(`Server runing on port ${app.get('port')}`)
})