const SPACE_GAP = ' '.repeat(4)
const HEAD_PREFIX = '#'
const LIST_PREFIX = '+'

let converter = {}
converter.group = function (input) {
  return `${HEAD_PREFIX} ${input}\n`
}

module.exports = function (type, input) {
  if (!type) {
    console.log('type is required')
    return
  }
  return converter[type.toLowerCase()](input)
}
