// eslint-disable-next-line import/no-extraneous-dependencies
const { TxtReader } = require('txt-reader')

export async function getLinesNumber(file) {
  console.log(file.name)
  return (
    new Promise((resolve, reject) => {
      const reader = new TxtReader()
      reader.loadFile(file.name).then((res) => {
        resolve(res.result)
      }).catch((er) => reject(er))
    })
  )
}
