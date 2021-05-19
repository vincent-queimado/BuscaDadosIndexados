const getFiles = require('./utils/files_generator')

module.exports = (path, extension) => {      
    return getFiles(path, extension)
}