// eslint-disable-next-line import/no-extraneous-dependencies
const { TxtReader } = require('txt-reader')

export async function getLinesNumber(file) {
  return (
    new Promise((resolve, reject) => {
      const reader = new TxtReader()
      reader.sniffLines(file, 10).then((res) => {
        resolve(res.result)
      }).catch((er) => reject(er))
    })
  )
}
