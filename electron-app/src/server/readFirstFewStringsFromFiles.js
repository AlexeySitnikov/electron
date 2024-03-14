const readFirstFewStringsFromFile = require('./readFirstFewStringsFromFile')

const readFirstFewStringsFromFiles = async (inputFiles) => {
  const files = [...inputFiles]
  const dataFromAllFiles = await Promise.all(
    [...files.map((file, index) => (readFirstFewStringsFromFile(file, index)))],
  )
  return dataFromAllFiles
}

module.exports = readFirstFewStringsFromFiles
