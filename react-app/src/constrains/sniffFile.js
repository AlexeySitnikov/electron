import { TxtReader } from 'txt-reader'

export function sniffFile(file, index, stringsToSniff) {
  return (
    new Promise((resolve, reject) => {
      const reader = new TxtReader()
      reader.sniffLines(file, Number(stringsToSniff))
        .then((responce) => resolve({
          name: file.name,
          path: file.path,
          data: responce.result,
          linesToBeDeleted: 2,
          fileOrder: index + 1,
        }))
        .catch((er) => reject(er))
    })
  )
}
