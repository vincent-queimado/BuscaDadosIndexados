const http = require('http')
const dataSearch = require('../dataSearching/search')
const config = require('../../../config/config')

const port = config[process.env.NODE_ENV || 'development'].server.port

const listening = (table) => {
    const server = http.createServer((req, res) => {

        if (req.url == '/search' && req.method == "POST") {
            let datas = ''

            req.on('data', (chunk) => {
            datas += chunk
            })

            req.on('end', () => {
                datas = JSON.parse(datas.toString())
                res.write(JSON.stringify(dataSearch(table, datas.words)))
                res.end()
            })
        } else {
            res.end('Invalid request')
        }
    })

    server.listen(port, () => { console.log('--> SEARCH ENGINE SERVER IS READY!') })

    server.on('error', (err) => console.log(err))
}

module.exports = listening