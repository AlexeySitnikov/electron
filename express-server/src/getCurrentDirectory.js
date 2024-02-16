// import path from 'path'
const path = require('path')

const getCurrentDirectory = (files)=>{
  return path.dirname(files[0])
}

module.exports = getCurrentDirectory