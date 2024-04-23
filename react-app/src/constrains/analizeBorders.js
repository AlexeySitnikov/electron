import { getDeltaXYZ } from './getDeltaXYZ'
import { getLinesByNumber } from './getLinesByNumber'
import { sortFilesOrder } from './sortFilesOrder'

export async function analizeBorders(files, {
  setPreReadingPercentage, setReadingPercentage, setPreReading, setReading,
}) {
  const fullXYZ = await Promise.all([...(sortFilesOrder(files))
    .filter((_, index) => ((index === 0) || (index === (files).length - 1)))
    .map((file, index) => (getLinesByNumber(file, index, {
      setPreReadingPercentage, setReadingPercentage, setPreReading, setReading,
    })
    )),
  ])

  const detlas = getDeltaXYZ(fullXYZ[0].type, fullXYZ[0].lines.result)

  if (fullXYZ[0].type === '1D') {
    return ({
      linesZ: Number(fullXYZ[0].result[1].lineNumber) - Number(fullXYZ[0].result[0].lineNumber),
      Zmax: Number(fullXYZ[0].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[0]),
      type: fullXYZ[0].type,
    })
  }

  if (fullXYZ[0].type === '3D') {
    return ({
      Xmin: Number(fullXYZ[0].result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[0]),
      Xmax: fullXYZ[1]
        ? Number(fullXYZ[1].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[0])
        : Number(fullXYZ[0].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[0]),
      deltaX: detlas.deltaX,
      Ymin: Number(fullXYZ[0].result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[1]),
      Ymax: fullXYZ[1]
        ? Number(fullXYZ[1].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[1])
        : Number(fullXYZ[0].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[1]),
      deltaY: detlas.deltaY,
      Zmin: Number(fullXYZ[0].result[0].value.trim().replace(/\s\s+/g, ' ').split(' ')[2]),
      Zmax: fullXYZ[1]
        ? Number(fullXYZ[1].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[2])
        : Number(fullXYZ[0].result[1].value.trim().replace(/\s\s+/g, ' ').split(' ')[2]),
      deltaZ: detlas.deltaZ,
      type: fullXYZ[0].type,
    })
  }
  return 'unknown'
}
