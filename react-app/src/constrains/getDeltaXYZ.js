import { getDeltaXYZFor1D } from './getDeltaXYZFor1D'
import { getDeltaXYZFor3D } from './getDeltaXYZFor3D'

export function getDeltaXYZ(type, lines) {
  if (type === '3D') {
    return (getDeltaXYZFor3D(lines))
  } if (type === '1D') {
    return getDeltaXYZFor1D(lines)
  }
  return 'unknown'
}
