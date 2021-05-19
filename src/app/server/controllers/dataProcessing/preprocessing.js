const config = require('../../../config/config')
const reloadFiles = require('../../../utils/files_generator')
const reloadDatas = require('../dataSubProcessing/processing_datas')

const conf = config[process.env.NODE_ENV || 'development'].processing

const processing = async() =>{

    console.log('--> PREPROCESSING DATAS...')
    
    console.time("--> FINDING DATABASE FILES")
    const files = await reloadFiles(conf.path, conf.extension)
    console.timeEnd("--> FINDING DATABASE FILES")
    
    console.time("--> EXTRACTING/INDEXING DATAS FROM FILES")
    const datas = await reloadDatas(conf.path, conf.delimiter, files)
    console.timeEnd("--> EXTRACTING/INDEXING DATAS FROM FILES")

    return datas
}

module.exports = processing
