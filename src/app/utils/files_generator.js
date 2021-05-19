const fs = require('fs')

module.exports = async (folder, ext) => { 
  const files = fs.readdirSync(folder , {withFileTypes: true})
    .filter(item => !item.isDirectory() && item.name.endsWith(`${ext}`))
    .map(item => item.name)

  return files
}
