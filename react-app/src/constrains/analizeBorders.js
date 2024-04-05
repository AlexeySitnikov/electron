import { getDeltaXYZ } from './getDeltaXYZ'
import { getLinesByNumber } from './getLinesByNumber'
import { sortFilesOrder } from './sortFilesOrder'

export async function analizeBorders(files) {
  const fullXYZ = await Promise.all([...(sortFilesOrder(files))
    .filter((_, index) => ((index === 0) || (index === (files).length - 1)))
    .map((file, index) => (getLinesByNumber(file, index))),
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
