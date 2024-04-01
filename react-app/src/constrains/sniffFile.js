import { TxtReader } from 'txt-reader'

export function sniffFile(file, index) {
  return (
    new Promise((resolve, reject) => {
      const reader = new TxtReader()
      reader.sniffLines(file, 5)
        .then((responce) => resolve({
          name: file.name,
          path: file.path,
          data: responce.result,
          deleteFirstTwoStrings: true,
          fileOrder: index + 1,
        }))
        .catch((er) => reject(er))
    })
  )
}