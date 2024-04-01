import { TxtReader } from 'txt-reader'
// import { getLines } from './getLines'

export function getLinesByNumber(file) {
  return (
    new Promise((resolve, reject) => {
      const reader = new TxtReader()
      reader.loadFile(file).progress((progress) => { console.log(progress) })
        .then((r) => {
          reader.getSporadicLines([3, { start: r.result.lineCount, count: 1 }])
            .then((result) => { resolve(result) })
            .catch((er) => { reject(er) })
        })
    })
  )
}
