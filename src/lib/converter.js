// TODO: enum类型,数组类型,数组元素的类型
import { isObjEmpty } from './utils'
import randomData from './randomData'

const SPACE_GAP = ' '.repeat(4)
const HEAD_PREFIX = '#'
const LIST_PREFIX = '+'
const LINE_BREAK = '\n'
const MULTI_LINE_BREAK = '\n'.repeat(3)

const COLOR = {
  yellow: '#dec24a',
  green: '#1e9f4e',
  red: '#ad342c',
  blue: '#1eb4cf'
}

function type (text, hasColor, color='#000') {
  if (hasColor) {
    return `<span style="color:${color};">${text}</span>`
  }
  else {
    return text
  }
}

let converter = {}

converter.group = function (inputObj, option={}) {
  if (inputObj.name && inputObj.name.length) {
    let result = `${HEAD_PREFIX} Group ${inputObj.name}${MULTI_LINE_BREAK}`
    return type(result, option.hasColor, COLOR.green)
  }
}

converter.basic = function (inputObj, option={}) {
  // TODO:有key没值的情况
  if (isObjEmpty(inputObj)) {
    return
  }
  let keys = ''
  if (option.keys && option.keys.length && option.keys[0]) {
    // TODO:可能有先前的部分就有?的情况了
    // TODO:路径中的param呢
    keys = `{?${option.keys.join(',')}}`
  }
  let part1 = `${HEAD_PREFIX} ${inputObj.keyword || ''}`
  let part2 = `${inputObj.method || ''} ${inputObj.path || ''}${keys}`
  return `${type(part1, option.hasColor, COLOR.green)} [${type(part2, option.hasColor, COLOR.yellow)}]${MULTI_LINE_BREAK}`
}

converter.descrip = function (inputObj, option={}) {
  return `${inputObj.descrip || ''}${MULTI_LINE_BREAK}`
}

converter.params = function (inputArr, option={}) {
  if (!inputArr.length) {
    return
  }
  let params = ''
  for (let param of inputArr) {
    let fake = '\`example data\`'
    if (param.paraType) {
      fake = randomData(param.paraType)
    }
    if (param.paraType === 'string') {
      fake = `\`${fake}\``
    }
    params += `${SPACE_GAP}${type(LIST_PREFIX, option.hasColor, COLOR.red)} ${param.keyword}: ${type(fake, option.hasColor, COLOR.green)} (${type(param.paraType, option.hasColor, COLOR.yellow)}, ${type(param.requirement, option.hasColor, COLOR.blue)}) - ${param.description}${LINE_BREAK}`
    switch (param.paraType) {
      case 'enum':
        let mems = (param.nested || '').split('\n')
        params += `${SPACE_GAP.repeat(2)} ${LIST_PREFIX} Members${LINE_BREAK}`
        for (let mem of mems) {
          params += `${SPACE_GAP.repeat(3)} ${LIST_PREFIX} ${mem}${LINE_BREAK}`
        }
        break
      default:

    }
  }
  return `${type(LIST_PREFIX, option.hasColor, COLOR.red)} Parameters${LINE_BREAK}${params}${MULTI_LINE_BREAK}`
}

converter.request = function (inputArr, option={}) {
  if (!inputArr.length) {
    return
  }
  let reqs = ''
  for (let req of inputArr) {
    reqs += `${SPACE_GAP.repeat(2)}${type(LIST_PREFIX, option.hasColor, COLOR.red)} ${req.keyword}: \`${type('example data', option.hasColor, COLOR.green)}\` (${type(req.paraType, option.hasColor, COLOR.yellow)}, ${type(req.requirement, option.hasColor, COLOR.blue)}) - ${req.description}${LINE_BREAK}`
  }
  return `${type(LIST_PREFIX, option.hasColor, COLOR.red)} Request (application/json;charset=utf-8)${LINE_BREAK}${SPACE_GAP}${type(LIST_PREFIX, option.hasColor, COLOR.red)} Attributes${LINE_BREAK}${reqs}${MULTI_LINE_BREAK}`
}

converter.response = function (inputObj, option={}) {
  if (! inputObj.arr || !inputObj.arr.length) {
    if (inputObj.code) {
      return `${type(LIST_PREFIX, option.hasColor, COLOR.red)} Response ${type(inputObj.code, option.hasColor, COLOR.yellow)}`
    }
    else return
  }
  // TODO:返回的嵌套层级特别多怎么办
  let ress = ''
  for (let res of inputObj.arr || []) {
    ress += `${SPACE_GAP.repeat(2)}${type(LIST_PREFIX, option.hasColor, COLOR.red)} ${res.keyword}: \`${type('example data', option.hasColor, COLOR.green)}\` (${type(res.paraType, option.hasColor, COLOR.yellow)}, ${type(res.requirement, option.hasColor, COLOR.blue)}) - ${res.description}${LINE_BREAK}`
  }
  return `${type(LIST_PREFIX, option.hasColor, COLOR.red)} Response ${type(inputObj.code, option.hasColor, COLOR.yellow)} ${type('(application/json;charset=utf-8)', option.hasColor, COLOR.red)}${LINE_BREAK}${SPACE_GAP}${type(LIST_PREFIX, option.hasColor, COLOR.red)} Attributes${LINE_BREAK}${ress}${MULTI_LINE_BREAK}`
}

export default converter
