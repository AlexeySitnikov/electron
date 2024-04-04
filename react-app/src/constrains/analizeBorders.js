import { getDeltaXYZ } from './getDeltaXYZ'
import { getLinesByNumber } from './getLinesByNumber'

export async function analizeBorders(selectedFiles) {
  const startLine = 3
  const fullXYZ = await Promise.all([...Array.from(selectedFiles)
    .filter((_, index) => ((index === 0) || (index === Array.from(selectedFiles).length - 1)))
    .map((file, index) => (getLinesByNumber(file, index, startLine))),
  ])

  const detlas = getDeltaXYZ(fullXYZ[0].lines.result)
  return ({
    Xmin: Number(fullXYZ[0].result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[0]),
    Xmax: Number(fullXYZ[1].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[0]),
    deltaX: detlas.deltaX,
    Ymin: Number(fullXYZ[0].result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[1]),
    Ymax: Number(fullXYZ[1].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[1]),
    deltaY: detlas.deltaY,
    Zmin: Number(fullXYZ[0].result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[2]),
    Zmax: Number(fullXYZ[1].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[2]),
    deltaZ: detlas.deltaZ,
  })
}
