import { sniffFile } from './sniffFile'

export async function sniffFiles({ selectedFiles, stringsToSniff }) {
  const sniffDataFromFiles = await Promise.all(
    [...Array.from(selectedFiles).map((file, index) => sniffFile(file, index, stringsToSniff))],
  )
  return (sniffDataFromFiles)
}
