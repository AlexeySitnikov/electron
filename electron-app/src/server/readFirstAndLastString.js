const { TxtReader } = require('txt-reader')

const readFirstAndLastString = (file) => {
  const reader = new TxtReader()
  reader.loadFile(file)
    .progress((progress) => {
      console.log(`Loading file progress: ${progress}%`)
    })
}

module.exports = readFirstAndLastString
