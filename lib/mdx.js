// Get all file names from the directory
const exp = require('constants')
const fs = require('fs')
const path = require('path')

const getFiles = (dir) => {
    const files = fs.readdirSync(dir)
    const filesPaths = files.map((file) => path.join(dir, file))
    return filesPaths
}

export default getFiles
