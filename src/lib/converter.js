// TODO: enum类型

const SPACE_GAP = ' '.repeat(4)
const HEAD_PREFIX = '#'
const LIST_PREFIX = '+'
const LINE_BREAK = '\n'
const DOUBLE_LINE_BREAK = '\n'.repeat(2)

function alert (text, color='#ff0000') {
  return `<span style="color:${color};">${text}</span>`
}

let converter = {}
converter.group = function (inputObj) {
  return `${HEAD_PREFIX} Group ${inputObj.name}${DOUBLE_LINE_BREAK}`
}
converter.basic = function (inputObj) {
  return `${HEAD_PREFIX} ${inputObj.keyword || alert('关键字')} [${inputObj.method || alert('METHOD')} ${inputObj.path || alert('路径')}]${DOUBLE_LINE_BREAK}`
}
converter.descrip = function (inputObj) {
  return `${inputObj.descrip}${DOUBLE_LINE_BREAK}`
}
converter.params = function (inputArr) {
  let params = ''
  for (let param of inputArr) {
    params += `${SPACE_GAP}${LIST_PREFIX} ${param.keyword}: \`example data\` (${param.paraType}, ${param.requirement}) - ${param.description}${LINE_BREAK}`
  }
  return `${LIST_PREFIX} Parameters${LINE_BREAK}${params}`
}

export default converter
