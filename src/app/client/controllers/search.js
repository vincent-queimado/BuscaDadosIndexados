const http = require("http")
const config = require('./../../config/config')

const port = config[process.env.NODE_ENV || 'development'].server.port

module.exports = (words) => {
    let dataSearch = JSON.stringify({
        'words' : words
    })

    let options = {
    port: port,
    path: '/search',
    method: 'POST',
    }

    let req = http.request(options, (res) => {
        let terms = []
        let datas = ''

        for (word of words){
            terms.push(JSON.stringify(word))
        }

        res.on('data', (chunk) => {
            datas += chunk
        })

        res.on('end', () => {
            if (datas) {
                datas = JSON.parse(datas.toString())
                if (datas.movies.length > 1){
                    if (terms.length == 1) process.stdout.write(`\nForam encontradas ${datas.movies.length} ocorrências pelo termo ${terms}\n`)
                    if (terms.length > 1) process.stdout.write(`\nForam encontradas ${datas.movies.length} ocorrências pelos termos ${terms}\n`)

                    for (movie of datas.movies) {
                        process.stdout.write(movie + '\n')
                    }
                } else if (datas.movies.length == 1){    
                    if (terms.length == 1) process.stdout.write(`\nFoi encontrada ${datas.movies.length} ocorrência pelo termo ${terms}\n`)
                    if (terms.length > 1) process.stdout.write(`\nFoi encontrada ${datas.movies.length} ocorrência pelos termos ${terms}\n`)
                    process.stdout.write(datas.movies + '\n')
                } else {
                    process.stdout.write('\nNenhuma ocorrência encontrada!\n')
                }
            }
            
        })
    })

    req.on('error', (e) => {
    console.error(e)
    })

    req.write(dataSearch)
    req.end()
}
