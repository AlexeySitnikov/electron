import { TxtReader } from 'txt-reader'

export function getDeltaX(file) {
  let startLine = 3
  let deltaX = 0
  let previousValue = 0
  let currentValue = 0
  //   let readNextLine = true
  return (
    new Promise(() => {
      const reader = new TxtReader()
      reader.loadFile(file).progress((progress) => { console.log(progress) })
        .then(() => {
          reader.getLines(startLine, 1).then((r) => {
            previousValue = Math.abs(Number(r.result[0].trim().replace(/\s\s+/g, ' ').split(' ')[1]))
          })
            .then(() => {
              startLine += 1
              do {
                // eslint-disable-next-line no-loop-func
                reader.getLines(startLine, 1).then((r) => {
                  currentValue = Math.abs(Number(r.result[0].trim().replace(/\s\s+/g, ' ').split(' ')[1]))
                  if (previousValue !== currentValue) {
                    deltaX = Math.abs(previousValue - currentValue)
                    // readNextLine = false
                  }
                  console.log(deltaX)
                  console.log(!Math.abs(previousValue - currentValue))
                })
                startLine += 1
              } while (!Math.abs(previousValue - currentValue))
            })
        })
    })
  )
}
