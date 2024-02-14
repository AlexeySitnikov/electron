import { getCurrentDirectory } from './getCurrentDirectory.js'
// const getCurrentDirectory = require('./getCurrentDirectory.js')

export function getTempDirectory(files){
  const currentDirectory = getCurrentDirectory(files)
  const tempDirectory = currentDirectory + '\\temp'
  return {currentDirectory, tempDirectory}
}