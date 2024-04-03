import { TxtReader } from 'txt-reader'

export function getDeltaX(file) {
  return (
    new Promise((resolve, reject) => {
      let startLine = 3
      let deltaX = 0
      let deltaY = 0
      let deltaZ = 0
      let previousValueForX = 0
      let currentValueForX = 0
      let previousValueForY = 0
      let currentValueForY = 0
      let previousValueForZ = 0
      let currentValueForZ = 0
      try {
        const reader = new TxtReader()
        reader.loadFile(file)
          .then(() => {
            reader.getLines(startLine, 1).then((line) => {
              previousValueForX = Math.abs(Number(line.result[0].trim().replace(/\s\s+/g, ' ').split(' ')[0]))
              previousValueForY = Math.abs(Number(line.result[0].trim().replace(/\s\s+/g, ' ').split(' ')[1]))
              previousValueForZ = Math.abs(Number(line.result[0].trim().replace(/\s\s+/g, ' ').split(' ')[2]))
            })
              .then(async () => {
                startLine += 1
                do {
                  // eslint-disable-next-line no-await-in-loop
                  const line = await reader.getLines(startLine, 1)

                  currentValueForX = Math.abs(Number(line.result[0].trim().replace(/\s\s+/g, ' ').split(' ')[0]))
                  currentValueForY = Math.abs(Number(line.result[0].trim().replace(/\s\s+/g, ' ').split(' ')[1]))
                  currentValueForZ = Math.abs(Number(line.result[0].trim().replace(/\s\s+/g, ' ').split(' ')[2]))

                  if ((previousValueForX !== currentValueForX) && (deltaX === 0)) {
                    deltaX = Math.abs(previousValueForX - currentValueForX)
                    console.log(deltaX)
                    console.log(line)
                  }
                  if ((previousValueForY !== currentValueForY) && (deltaY === 0)) {
                    deltaY = Math.abs(previousValueForY - currentValueForY)
                    console.log(deltaY)
                    console.log(line)
                  }
                  if ((previousValueForZ !== currentValueForZ) && (deltaZ === 0)) {
                    deltaZ = Math.abs(previousValueForZ - currentValueForZ)
                    console.log(deltaZ)
                    console.log(line)
                  }
                  startLine += 1
                } while ((deltaX === 0) || (deltaY === 0) || (deltaZ === 0))
                resolve({
                  deltaX,
                  deltaY,
                  deltaZ,
                })
              })
          })
      } catch (error) {
        reject(error)
      }
    })
  )
}
