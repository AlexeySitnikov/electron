import path from 'path'
// const path = require('path')

export function getCurrentDirectory(files){
  return path.dirname(files[0])
}