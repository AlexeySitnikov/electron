// import path from 'path'
const path = require('path')

const getCurrentDirectory = (files) => path.dirname(files[0].name)

module.exports = getCurrentDirectory
