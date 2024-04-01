import { sniffFile } from './sniffFile'

export async function sniffFiles({ selectedFiles }) {
  const sniffDataFromFiles = await Promise.all(
    [...Array.from(selectedFiles).map((file, index) => sniffFile(file, index))],
  )
  return (sniffDataFromFiles)
}
