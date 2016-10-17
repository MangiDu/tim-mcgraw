// NOTE: 因为使用pre做最后的显示和输出,所以使用``字符串模板时切记不能换行,可以使用+操作符连接

// TODO: enum类型,数组类型,数组元素的类型
import { isObjEmpty, oneOf } from './utils'
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
    return `<span style="color:${COLOR[color] || color};">${text}</span>`
  }
  else {
    return text
  }
}

function convertParamArr (inputArr, option) {
  let headStr = `${type(LIST_PREFIX, option.hasColor, COLOR.red)} ${option.head}${LINE_BREAK}`
  let params = ''
  for (let param of inputArr) {
    let fake, suffix, subtype
    let paraTpl = function (fake, suffix = '', subtype = '') {
      if (subtype) {
        subtype = `[${type(subtype, option.hasColor, 'yellow')}]`
      }
      let tpl = `${SPACE_GAP}${type(LIST_PREFIX, option.hasColor, COLOR.red)} ${param.keyword}: ${type(fake, option.hasColor, COLOR.green)} (${type(param.paraType, option.hasColor, COLOR.yellow)}${subtype}, ${type(param.requirement, option.hasColor, COLOR.blue)}) - ${param.description}${LINE_BREAK}`
      switch (typeof suffix) {
        case 'string':
          tpl += suffix
          break
        case 'function':
          tpl += suffix()
          break
      }
      return tpl
    }
    // 简单数据类型填写fake
    // 复杂数据类型填写fake和suffix,或者...直接改写paraTpl
    let mems, headerStr, content, pattern
    switch (param.paraType) {
      // 简单数据类型
      case 'string':
        fake = randomData('string')
        break
      case 'number':
        fake = randomData('number')
        break
      case 'boolean':
        fake = randomData('boolean')
        break
      // TODO:复杂的情况 enum和array[object]
      case 'enum':
        mems = (param.nested || '').split('\n')
        headerStr = `${SPACE_GAP.repeat(2)}${type(LIST_PREFIX, option.hasColor, COLOR.red)} Members${LINE_BREAK}`
        content = ''
        // TODO:现在是必须有个空格分隔才能截取出来,正则还要再细化
        pattern = /^(\S*)\s?(\(\S*\))?\s?\-?\s?(\S*)?\n?/
        for (let [index, text] of mems.entries()) {
          let partials = text.match(pattern)
          if (index === 0) {
            fake = partials[1] || ''
          }
          if (partials[2] && partials[2].length) {
            '(git)'.replace(pattern, function($2){return '111'})
            text = text.replace(/\((\S*)\)/, function () {
              return `(${type(arguments[1], option.hasColor, 'yellow')})`
            })
          }
          content += `${SPACE_GAP.repeat(3)}${type(LIST_PREFIX, option.hasColor, COLOR.red)} ${text}${LINE_BREAK}`
        }
        suffix = `${headerStr}${content}`
        break
      case 'object':
        mems = (param.nested || '').split('\n')
        content = ''
        for (let [index, text] of mems.entries()) {
          content += `${SPACE_GAP.repeat(2)}${type(LIST_PREFIX, option.hasColor, COLOR.red)} ${text}${LINE_BREAK}`
        }
        suffix = content
        break
      case 'array':
        mems = (param.nested || '').split('\n')
        subtype = param.subtype
        fake = ''
        headerStr = ''
        content = ''
        if (oneOf(subtype, ['string', 'number', 'boolean'])) {
          for (let i = 0; i < 3; i++) {
            content += `${SPACE_GAP.repeat(2)}${type(LIST_PREFIX, option.hasColor, COLOR.red)} ${randomData(subtype)}${LINE_BREAK}`
          }
        }
        else if (subtype === 'object') {
          headerStr = `${SPACE_GAP.repeat(2)}${type(LIST_PREFIX, option.hasColor, COLOR.red)} (${type('object', option.hasColor, 'yellow')})${LINE_BREAK}`
          for (let [index, text] of mems.entries()) {
            content += `${SPACE_GAP.repeat(3)}${type(LIST_PREFIX, option.hasColor, COLOR.red)} ${text}${LINE_BREAK}`
          }
        }
        suffix = `${headerStr}${content}`
        break
    }
    params += paraTpl(fake, suffix, subtype)
  }
  return `${headStr}${params}${MULTI_LINE_BREAK}`
}

let converter = {}

converter.group = function (inputObj, option={}) {
  if (inputObj.name && inputObj.name.length) {
    let result = `${HEAD_PREFIX} Group ${inputObj.name}${MULTI_LINE_BREAK}`
    return type(result, option.hasColor, COLOR.green)
  }
}

converter.basic = function (inputObj, option={}) {
  // TODO:仅匹配一次parameters的参数,现在是所有的basic信息都会有同一个parameter是列表
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
  option.head = 'Parameters'
  return convertParamArr(inputArr, option)
}

converter.request = function (inputArr, option={}) {
  if (!inputArr.length) {
    return
  }
  option.head = 'Request (application/json;charset=utf-8)'
  return convertParamArr(inputArr, option)
}

converter.response = function (inputObj, option={}) {
  if (! inputObj.arr || !inputObj.arr.length) {
    if (inputObj.code) {
      return `${type(LIST_PREFIX, option.hasColor, COLOR.red)} Response ${type(inputObj.code, option.hasColor, COLOR.yellow)}`
    }
    else return
  }
  // TODO:返回的嵌套层级特别多怎么办
  option.head = `Response ${type(inputObj.code, option.hasColor, COLOR.yellow)} ${type('(application/json;charset=utf-8)', option.hasColor, COLOR.red)}`
  return convertParamArr(inputObj.arr, option)
}

export default converter
