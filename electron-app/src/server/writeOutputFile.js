/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable default-param-last */
// import fs from 'fs'
const fs = require('fs')

const writeOutputFile = (sourceFiles = [], targetFile, startWriteTime, addInformation) => {
  const files = sourceFiles
  const tempFilesToBeDeleted = [...sourceFiles]
  const fileWriteStream = fs.createWriteStream(targetFile)
  if (addInformation) {
    fileWriteStream.write(addInformation)
  }
  streamMergeRecursive(files, fileWriteStream, tempFilesToBeDeleted, startWriteTime)
}

function streamMergeRecursive(files = [], fileWriteStream, tempFilesToBeDeleted, startWriteTime) {
  if (!files.length) {
    console.log(`Time needed to write files: ${(Date.now() - startWriteTime) / 1000} sec`)
    tempFilesToBeDeleted.forEach((element) => {
      fs.unlink(element, (err) => {
        if (err) throw err
      })
    })
    return fileWriteStream.end()
  }

  const currentFile = files.shift()
  const currentReadStream = fs.createReadStream(currentFile)

  currentReadStream.pipe(fileWriteStream, { end: false })
  currentReadStream.on('end', () => {
    streamMergeRecursive(files, fileWriteStream, tempFilesToBeDeleted, startWriteTime)
  })
  currentReadStream.on('error', (error) => {
    console.error(error)
    fileWriteStream.close()
  })
}

module.exports = writeOutputFile
