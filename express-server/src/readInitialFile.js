import fs from 'fs'
// const fs = require('fs')
// const readline = require('readline')
import readline from 'readline'

export function readInitialFile(file, index, tempDirectory){
return (
  new Promise((resolve)=>{
    const writerEx = fs.createWriteStream(`${tempDirectory}\\Ex_out_temp_${index + 1}.txt`)
    const writerEy = fs.createWriteStream(`${tempDirectory}\\Ey_out_temp_${index + 1}.txt`)
    const writerEz = fs.createWriteStream(`${tempDirectory}\\Ez_out_temp_${index + 1}.txt`)
    let lineIndex = 0
    const readStream = fs.createReadStream(file, 'utf-8')
    const rl = readline.createInterface({input: readStream})
    rl.on('line', (line) => {
      if (lineIndex > 1){
        writerEx.write(`${line.trim().replace(/\s\s+/g, ' ').split(' ')[3]}\n`)//[0] - x //[3] - Ex
        writerEy.write(`${line.trim().replace(/\s\s+/g, ' ').split(' ')[5]}\n`)//[1] - y //[5] - Ey
        writerEz.write(`${line.trim().replace(/\s\s+/g, ' ').split(' ')[7]}\n`)//[2] - z //[7] - Ez
      }
      else {
        lineIndex += 1
      }
    })
    rl.on('close',()=>{
      writerEx.end()
      writerEy.end()
      writerEz.end()
      resolve()
    })
  })
   
)}