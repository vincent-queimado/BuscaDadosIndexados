const fs = require('fs')
const readline = require('readline')

module.exports = async (path, delimiter, files) => {
    var dict = {}

    if (files.length > 0) {
        for (const filename of files) {
            const fileStream = fs.createReadStream(path + filename)
        
            const rl = readline.createInterface({
                input: fileStream,
                crlfDelay: Infinity 
            })

            for await (const line of rl) {
                let pos = 0
                
                for (var i=0; i<=line.length; i++) {
                    let char = line[i]
                    let word = line.slice(pos, i)

                    if (char === delimiter) {
                        if (word) (dict[word]) ? dict[word].files.push(filename) : dict[word] = {'files': [filename]}
                        pos = i + 1
                    }

                    if (i === line.length && word) {
                        (dict[word]) ? dict[word].files.push(filename) : dict[word] = {'files': [filename]}
                    }
                }
            }
        }    
    }
    return dict 
}
