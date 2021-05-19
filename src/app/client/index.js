const search = require('./controllers/search')


const searchInput = () =>{
    search(process.argv.slice(2))
}

searchInput()
