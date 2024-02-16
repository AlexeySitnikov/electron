const getInputFiles = (files = []) => {
  const inputFiles = []
  files.forEach((file) => {
    inputFiles.push(file)
  })
  return (inputFiles)
}

module.exports = getInputFiles
