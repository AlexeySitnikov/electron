import { TxtReader } from 'txt-reader'

export function sniffFile(file, index, stringsToSniff) {
  return (
    new Promise((resolve, reject) => {
      const reader = new TxtReader()
      reader.sniffLines(file, Number(stringsToSniff))
        .then((responce) => {
          let type = ''
          let linesToBeDeleted = 0
          if (responce.result[stringsToSniff - 1].trim().replace(/\s\s+/g, ' ').split(' ').length === 2) {
            type = '1D'
            linesToBeDeleted = 4
          } else if (responce.result[stringsToSniff - 1].trim().replace(/\s\s+/g, ' ').split(' ').length === 4) {
            type = '2D'
            linesToBeDeleted = 4
          } else if (responce.result[stringsToSniff - 1].trim().replace(/\s\s+/g, ' ').split(' ').length === 9) {
            type = '3D'
            linesToBeDeleted = 2
          } else { type = 'unknown' }
          resolve({
            name: file.name,
            path: file.path,
            data: responce.result,
            linesToBeDeleted,
            fileOrder: index + 1,
            type,
          })
        })
        .catch((er) => reject(er))
    })
  )
}
