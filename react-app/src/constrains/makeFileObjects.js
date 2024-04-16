export function makeFileObjects({ selectedFiles, analyzedFiles }) {
  const a = Array.from(selectedFiles).map((file) => {
    const f = analyzedFiles.find((el) => (el.name === file.name))
    return {
      file,
      linesToBeDeleted: f.linesToBeDeleted,
      fileOrder: f.fileOrder,
      type: f.type,
    }
  })
  return a
}
