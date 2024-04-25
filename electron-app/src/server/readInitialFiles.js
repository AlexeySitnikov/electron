/* eslint-disable no-return-await */
// import { readInitialFile } from './readInitialFile.js'
const readInitialFile = require('./readInitialFile.js')

const readInitialFiles = async (files, tempDirectory, webSocketServer) => await Promise.all(
  [...files.map((file, index) => (readInitialFile(file, index, tempDirectory, webSocketServer)))],
)

module.exports = readInitialFiles
