import fs from 'fs'
import path from 'path'

const tplRE = /\.tpl$/
const readFileList = (dir, fileList = {}) => {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    const filepath = path.join(dir, file)
    const stat = fs.statSync(filepath)
    if (stat.isDirectory()) {
      readFileList(filepath, fileList)
    } else {
      const extname = path.extname(filepath)
      if (tplRE.test(extname)) {
        fileList[filepath.replace(tplRE, '')] = fs.readFileSync(filepath, 'utf-8')
      }
    }
  })
  return fileList
}

export const readTemplateList = (dir) => {
  const templateMap= readFileList(dir)
  const result = []
  Object.keys(templateMap).forEach((key) => {
    const file = path.relative(dir, key)
    result.push({
      file,
      content: templateMap[key]
    })
  })
  return result
}