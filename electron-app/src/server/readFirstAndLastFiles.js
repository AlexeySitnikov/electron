const readFirstAndLastString = require('./readFirstAndLastString')

const readFirstAndLastFiles = async (files) => {
  await Promise.all(
    [...files.map((file, index) => (readFirstAndLastString(file, index)))],
  )
}

module.exports = readFirstAndLastFiles
