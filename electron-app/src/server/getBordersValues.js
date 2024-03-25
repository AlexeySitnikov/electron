const readInitialFiles = require('./readInitialFiles')

const getBordersValues = async (inputFiles) => {
  const files = [...inputFiles]
  const responce = await readInitialFiles(files)
  console.log(responce)
}

module.exports = getBordersValues
