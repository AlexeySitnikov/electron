// import { TxtReader } from 'txt-reader'
// import { getLines } from './getLines'

import { getLinesByNumber } from './getLinesByNumber'

export async function analizeBorders(selectedFiles) {
  const startLine = 3
  const fullXYZ = await Promise.all([...Array.from(selectedFiles)
    .filter((_, index) => ((index === 0) || (index === Array.from(selectedFiles).length - 1)))
    .map((file) => (getLinesByNumber(file, startLine))),
  ])

  return ({
    Xmin: fullXYZ[0].result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[0],
    Xmax: fullXYZ[1].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[0],
    Ymin: fullXYZ[0].result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[1],
    Ymax: fullXYZ[1].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[1],
    Zmin: fullXYZ[0].result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[2],
    Zmax: fullXYZ[1].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[2],
  })
}
