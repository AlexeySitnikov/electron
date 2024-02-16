// import { getCurrentDirectory } from './getCurrentDirectory.js'
const getCurrentDirectory = require('./getCurrentDirectory.js')

const getTempDirectory = (files) => {
  const currentDirectory = getCurrentDirectory(files)
  const tempDirectory = `${currentDirectory}\\temp`
  return { currentDirectory, tempDirectory }
}

module.exports = getTempDirectory
