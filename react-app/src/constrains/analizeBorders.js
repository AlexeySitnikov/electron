// import { TxtReader } from 'txt-reader'
// import { getLines } from './getLines'

import { getLinesByNumber } from './getLinesByNumber'

export async function analizeBorders(selectedFiles) {
  const a = await Promise.all([...Array.from(selectedFiles)
    .filter((_, index) => ((index === 0) || (index === Array.from(selectedFiles).length - 1)))
    .forEach((file) => (getLinesByNumber(file))),
  ])
  console.log(a[0].result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[2])
  const fullZ = a.forEach((element) => element.result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[2])
  return (fullZ[fullZ.length - 1] - fullZ[0])
}

// const a = await Promise.all([...Array.from(selectedFiles).map((file, index) => {
//   if ((index === 0) || (index === Array.from(selectedFiles).length - 1)) {
//     return (getLinesByNumber(file))
//   }
//   return []
// }),
// ])
// return (a[0].result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[2])
