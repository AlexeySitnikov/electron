export function makeFileObjects({ selectedFiles, analyzedFiles }) {
  const a = Array.from(selectedFiles).map((file) => {
    const f = analyzedFiles.find((el) => (el.name === file.name))
    return {
      file,
      deleteFirstTwoStrings: f.deleteFirstTwoStrings,
      fileOrder: f.fileOrder,
    }
  })
  return a
}
