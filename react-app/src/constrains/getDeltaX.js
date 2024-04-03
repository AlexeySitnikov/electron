import { TxtReader } from 'txt-reader'

export function getDeltaX(file) {
  let startLine = 3
  let deltaX = 0
  let previousValue = 0
  let currentValue = 0

  return (
    new Promise(() => {
      const reader = new TxtReader()
      reader.loadFile(file)
        .then(() => {
          reader.getLines(startLine, 1).then((r) => {
            previousValue = Math.abs(Number(r.result[0].trim().replace(/\s\s+/g, ' ').split(' ')[2]))
          })
            .then(async () => {
              startLine += 1
              do {
                // eslint-disable-next-line no-await-in-loop
                const r = await reader.getLines(startLine, 1)
                currentValue = Math.abs(Number(r.result[0].trim().replace(/\s\s+/g, ' ').split(' ')[2]))
                if (previousValue !== currentValue) {
                  deltaX = Math.abs(previousValue - currentValue)
                }
                startLine += 1
              } while (deltaX === 0)
            })
        })
    })
  )
}
