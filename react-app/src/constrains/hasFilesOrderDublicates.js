export function hasFilesOrderDublicates({ analyzedFiles }) {
  const currectFiles = analyzedFiles
  let isDuplicates = false

  for (let i = 0; i < currectFiles.length; i += 1) {
    for (let j = 0; j < currectFiles.length; j += 1) {
      if (i !== j) {
        if (currectFiles[i].fileOrder === currectFiles[j].fileOrder) {
          isDuplicates = true
        }
      }
    }
  }
  return isDuplicates
}
