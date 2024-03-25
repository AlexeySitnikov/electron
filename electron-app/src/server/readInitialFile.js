const writeTempFiles = require('./writeTempFiles')

const readInitialFile = (file, index, tempDirectory) => {
  if (tempDirectory) {
    return (
      writeTempFiles(file, index, tempDirectory)
    )
  }
  return 'asd'
}

module.exports = readInitialFile
