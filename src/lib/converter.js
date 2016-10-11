// TODO: enum类型,数组类型,数组元素的类型

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

converter.basic = function (inputObj, option={}) {
  let keys = ''
  if (option.keys && option.keys.length && option.keys[0]) {
    // TODO:可能有先前的部分就有?的情况了
    // TODO:路径中的param呢
    keys = `{?${option.keys.join(',')}}`
  }
  return `${HEAD_PREFIX} ${inputObj.keyword || alert('关键字')} [${inputObj.method} ${inputObj.path}${keys}]${DOUBLE_LINE_BREAK}`
}

converter.descrip = function (inputObj) {
  return `${inputObj.descrip}${DOUBLE_LINE_BREAK}`
}

converter.params = function (inputArr) {
  let params = ''
  for (let param of inputArr) {
    params += `${SPACE_GAP}${LIST_PREFIX} ${param.keyword}: \`example data\` (${param.paraType}, ${param.requirement}) - ${param.description}${LINE_BREAK}`
  }
  return `${LIST_PREFIX} Parameters${LINE_BREAK}${params}${DOUBLE_LINE_BREAK}`
}

converter.request = function (inputArr) {
  let reqs = ''
  for (let req of inputArr) {
    reqs += `${SPACE_GAP.repeat(2)}${LIST_PREFIX} ${req.keyword}: \`example data\` (${req.paraType}, ${req.requirement}) - ${req.description}${LINE_BREAK}`
  }
  return `${LIST_PREFIX} Request (application/json;charset=utf-8)${LINE_BREAK}${SPACE_GAP}${LIST_PREFIX} Attributes${LINE_BREAK}${reqs}${DOUBLE_LINE_BREAK}`
}

converter.response = function () {
  // TODO:返回的嵌套层级特别多怎么办

}

export default converter
