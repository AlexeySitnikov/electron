const fs = require('fs')
const readline = require('readline')

const readFirstFewStringsFromFile = (file, index) => (
  new Promise((resolve) => {
    const fileData = {
      name: file,
      data: [],
      deleteFirstTwoStrings: true,
      fileOrder: index + 1,
    }
    let lineIndex = 0
    const readStream = fs.createReadStream(file, 'utf-8')
    const rl = readline.createInterface({ input: readStream })
    rl.on('line', (line) => {
      if (lineIndex < 5) {
        fileData.data.push(`${line}\n`)
        lineIndex += 1
      } else {
        rl.on('close', () => {
          resolve(fileData)
        })
      }
    })
  })
)

module.exports = readFirstFewStringsFromFile
