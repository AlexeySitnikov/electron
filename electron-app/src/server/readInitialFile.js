const writeTemp1DFiles = require('./writeTemp1DFiles')
const writeTempFiles = require('./writeTempFiles')

const readInitialFile = (file, index, tempDirectory) => {
  if (tempDirectory) {
    if (file.type === '3D') {
      return (
        writeTempFiles(file, index, tempDirectory)
      )
    } if (file.type === '1D') {
      return (
        writeTemp1DFiles(file, index, tempDirectory)
      )
    }
  }
  return 'asd'
}

module.exports = readInitialFile
