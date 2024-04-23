import { TxtReader } from 'txt-reader'

export function getLinesByNumber(file, index, {
  setPreReadingPercentage, setReadingPercentage, setPreReading, setReading,
}) {
  return (
    new Promise((resolve, reject) => {
      let lineCount = 0
      let responce = {}
      const startLine = file.linesToBeDeleted ? file.linesToBeDeleted + 1 : 1
      const reader = new TxtReader()
      setPreReading(true)
      reader.loadFile(file.file).progress((progress) => {
        if (index === 0) {
          setPreReadingPercentage(Math.round(progress))
        }
      })
        .then((r) => {
          lineCount = r.result.lineCount
          reader.getSporadicLines([startLine, {
            start: (file.type === '1D')
              ? (r.result.lineCount - 1) : r.result.lineCount,
            count: 1,
          }])
            .then((result) => {
              responce = { ...result, type: file.type }
              if (index !== 0) { resolve(responce) }
            })
            .catch((er) => { reject(er) })
        })
        .then(() => {
          if (index === 0) {
            setPreReading(false)
            setReading(true)
            reader.getLines(startLine, Math.round(lineCount / 10))
              .progress((progress) => {
                setReadingPercentage(Math.round(progress))
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
