import { TxtReader } from 'txt-reader'
// import { getLines } from './getLines'

export function getLinesByNumber(file, index, startLine) {
  return (
    new Promise((resolve, reject) => {
      let lineCount = 0
      let responce = {}
      const reader = new TxtReader()
      reader.loadFile(file).progress((progress) => {
        if (index === 0) {
          console.log(`read file ${Math.round(progress)}%`)
        }
      })
        .then((r) => {
          lineCount = r.result.lineCount
          reader.getSporadicLines([startLine, { start: r.result.lineCount, count: 1 }])
            .then((result) => {
              responce = { ...result }
              if (index !== 0) { resolve(responce) }
            })
            .catch((er) => { reject(er) })
        })
        .then(() => {
          if (index === 0) {
            reader.getLines(startLine, Math.round(lineCount / 10))
              .progress((progress) => {
                console.log(`read first ${Math.round(lineCount / 10)} lines of file ${Math.round(progress)}%`)
              })
              .then((lines) => {
                responce = { ...responce, lines }
                resolve(responce)
              })
          }
        })
    })
  )
}
