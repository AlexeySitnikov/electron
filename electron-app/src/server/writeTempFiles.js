const fs = require('fs')
const readline = require('readline')
const writeExEyEz = require('./writeExEyEz')

const writeTempFiles = (file, index, tempDirectory) => (
  new Promise((resolve) => {
    const writerEx = fs.createWriteStream(`${tempDirectory}\\Ex_out_temp_${index + 1}.txt`)
    const writerEy = fs.createWriteStream(`${tempDirectory}\\Ey_out_temp_${index + 1}.txt`)
    const writerEz = fs.createWriteStream(`${tempDirectory}\\Ez_out_temp_${index + 1}.txt`)
    let lineIndex = 0
    const readStream = fs.createReadStream(file.name, 'utf-8')
    const rl = readline.createInterface({ input: readStream })
    rl.on('line', (line) => {
      if (lineIndex >= file.linesToBeDeleted) {
        writeExEyEz(writerEx, writerEy, writerEz, line)
      } else {
        lineIndex += 1
      }
    })
    rl.on('close', () => {
      writerEx.end()
      writerEy.end()
      writerEz.end()
      resolve()
    })
  })
)

module.exports = writeTempFiles
