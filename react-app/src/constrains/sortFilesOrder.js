export function sortFilesOrder(files) {
  const currectFiles = files
  return currectFiles.sort((a, b) => (a.fileOrder - b.fileOrder))
}
