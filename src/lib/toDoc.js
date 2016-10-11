import converter from './converter'

function convert (section) {
  if (!section || !section.type) {
    console.warn('Seciton\'s type is required!')
    return
  }
  if (typeof converter[section.type.toLowerCase()] !== 'function') {
    console.warn(`No "${section.type}" type in converter!`)
    return
  }
  return converter[section.type.toLowerCase()](section.input)
}
export function toDoc (sectionArr, options) {
  let resultArr = []
  sectionArr.forEach((section, index) => {
    let sec = Object.assign({}, section)
    // TODO:如果是basic,还要处理params里面的key
    let result = convert(sec)
    resultArr.push(result)
  })
  return resultArr.join('')
}
