import fs from 'fs'
// const fs = require('fs')

export function makeTempDirectory(tempDirectory){
  try {
    if (!fs.existsSync(tempDirectory)) {
      fs.mkdirSync(tempDirectory);
    }
  } catch (err) {
    console.error(err);
  }
}