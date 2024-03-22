// import fs from 'fs'
const fs = require('fs')
const readline = require('readline')
const writeExEyEz = require('./writeExEyEz')
// import readline from 'readline'

const readInitialFile = (file, index, tempDirectory) => (
  new Promise((resolve) => {
    const writerEx = fs.createWriteStream(`${tempDirectory}\\Ex_out_temp_${index + 1}.txt`)
    const writerEy = fs.createWriteStream(`${tempDirectory}\\Ey_out_temp_${index + 1}.txt`)
    const writerEz = fs.createWriteStream(`${tempDirectory}\\Ez_out_temp_${index + 1}.txt`)
    let lineIndex = 0
    const readStream = fs.createReadStream(file.name, 'utf-8')
    const rl = readline.createInterface({ input: readStream })
    if (file.deleteFirstTwoStrings) {
      rl.on('line', (line) => {
        if (lineIndex > 1) {
          writeExEyEz(writerEx, writerEy, writerEz, line)
        } else {
          lineIndex += 1
        }
      })
    } else {
      rl.on('line', (line) => {
        writeExEyEz(writerEx, writerEy, writerEz, line)
      })
    }
    rl.on('close', () => {
      writerEx.end()
      writerEy.end()
      writerEz.end()
      resolve()
    })
  })

)

module.exports = readInitialFile
