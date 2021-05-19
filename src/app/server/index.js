const preprocess = require('./controllers/dataProcessing/preprocessing')
const httpServer = require('./controllers/httpListening/http')

const main = async () => {
    const table = await preprocess()
    await httpServer(table)
}

main()
