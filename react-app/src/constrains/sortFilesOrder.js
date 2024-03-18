export function sortFilesOrder({ analyzedFiles }) {
  const currectFiles = analyzedFiles
  return currectFiles.sort((a, b) => (a.fileOrder - b.fileOrder))
}
