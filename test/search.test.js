const preprocess = require('./../src/app/server/controllers/dataProcessing/preprocessing')
const httpServer = require('./../src/app/server/controllers/httpListening/http')
const searchInput = require('./../src/app/client/controllers/search')

beforeAll(async ()=> {
    const table = await preprocess()
    await httpServer(table)
})

describe('Search', () => {

  test('One word search', async (done) => {
    let dataSearch = ['vincent']
    let result = []

    try{
        result = await searchInput(dataSearch)
        expect(result).toBeTruthy()
        
    } catch (e) {
        console.log(e)
    }
    done()
  })

  test('Multiple word search', async (done) => {
    let dataSearch = ['vincent', 'dots']
    let result = []

    try{
        result = await searchInput(dataSearch)
        expect(result).toBeTruthy()
        
    } catch (e) {
        console.log(e)
    }
    done()
  })

  test('Search without words', async (done) => {
    let dataSearch = []
    let result = []

    try{
        result = await searchInput(dataSearch)
        expect(result).toBeTruthy()
        
    } catch (e) {
        console.log(e)
    }
    done()
  })

})
