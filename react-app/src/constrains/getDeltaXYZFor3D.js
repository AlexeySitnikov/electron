export function getDeltaXYZFor3D(lines) {
  let deltaX = 0
  let deltaY = 0
  let deltaZ = 0

  let currentValueForX = 0
  let currentValueForY = 0
  let currentValueForZ = 0

  const previousValueForX = Math.abs(Number(lines[0].trim().replace(/\s\s+/g, ' ').split(' ')[0]))
  const previousValueForY = Math.abs(Number(lines[0].trim().replace(/\s\s+/g, ' ').split(' ')[1]))
  const previousValueForZ = Math.abs(Number(lines[0].trim().replace(/\s\s+/g, ' ').split(' ')[2]))

  let i = 1
  do {
    if ((deltaX === 0)) {
      currentValueForX = Math.abs(Number(lines[i].trim().replace(/\s\s+/g, ' ').split(' ')[0]))
    }
    if ((deltaY === 0)) {
      currentValueForY = Math.abs(Number(lines[i].trim().replace(/\s\s+/g, ' ').split(' ')[1]))
    }
    if ((deltaZ === 0)) {
      currentValueForZ = Math.abs(Number(lines[i].trim().replace(/\s\s+/g, ' ').split(' ')[2]))
    }

    if ((previousValueForX !== currentValueForX) && (deltaX === 0)) {
      deltaX = Math.abs(previousValueForX - currentValueForX)
    }
    if ((previousValueForY !== currentValueForY) && (deltaY === 0)) {
      deltaY = Math.abs(previousValueForY - currentValueForY)
    }
    if ((previousValueForZ !== currentValueForZ) && (deltaZ === 0)) {
      deltaZ = Math.abs(previousValueForZ - currentValueForZ)
    }
    i += 1
  } while ((deltaX === 0) || (deltaY === 0) || (deltaZ === 0))

  return ({
    deltaX,
    deltaY,
    deltaZ,
  })
}
