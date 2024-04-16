const fs = require('fs')
const readline = require('readline')
const write1DE = require('./write1DE')

const writeTemp1DFiles = (file, index, tempDirectory) => (
  new Promise((resolve) => {
    const writerEx = fs.createWriteStream(`${tempDirectory}\\E_out_temp_${index + 1}.txt`)
    let lineIndex = 0
    const readStream = fs.createReadStream(file.name, 'utf-8')
    const rl = readline.createInterface({ input: readStream })
    rl.on('line', (line) => {
      if (lineIndex >= file.linesToBeDeleted) {
        write1DE(writerEx, line)
      } else {
        lineIndex += 1
      }
    })
    rl.on('close', () => {
      writerEx.end()
      resolve()
    })
  })
)

module.exports = writeTemp1DFiles
