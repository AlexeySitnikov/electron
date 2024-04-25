const fs = require('fs')
const readline = require('readline')
const writeExEyEz = require('./writeExEyEz')

const writeTempFiles = (file, index, tempDirectory, webSocketServer) => (
  new Promise((resolve) => {
    const writerEx = fs.createWriteStream(`${tempDirectory}\\Ex_out_temp_${index + 1}.txt`)
    const writerEy = fs.createWriteStream(`${tempDirectory}\\Ey_out_temp_${index + 1}.txt`)
    const writerEz = fs.createWriteStream(`${tempDirectory}\\Ez_out_temp_${index + 1}.txt`)
    let lineIndex = 0
    const readStream = fs.createReadStream(file.name, 'utf-8')
    let inputSize = 0
    let progressDate = Date.now()
    let inputRead = 0
    if (index === 0) {
      inputSize = fs.statSync(file.name).size
    }
    const rl = readline.createInterface({ input: readStream })
    rl.on('line', (line) => {
      if (lineIndex >= file.linesToBeDeleted) {
        if (index === 0) {
          const now = Date.now()
          inputRead += line.length + 1 // also count the \n
          if (now - progressDate > 1000) {
            const json = Math.floor(10000 * (inputRead / inputSize)) / 100
            webSocketServer.clients.forEach(
              (client) => client.send(JSON.stringify(json)),
            )
            // console.log(Math.floor(10000 * (inputRead / inputSize)) / 100)
            progressDate = now
          }
        }

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
