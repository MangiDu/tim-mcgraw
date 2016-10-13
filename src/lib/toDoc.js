import converter from './converter'
import _ from 'lodash'
// QWQ用了lodash...大概不会需要我自己再写工具方法了

function convert (section, option={}) {
  if (!section || !section.type) {
    console.warn('Seciton\'s type is required!')
    return
  }
  if (typeof converter[section.type.toLowerCase()] !== 'function') {
    console.warn(`No "${section.type}" type in converter!`)
    return
  }
  return converter[section.type.toLowerCase()](section.input, option)
}

export function toDoc (sectionArr, hasColor) {
  // option中有hasColor且为true时,这时生成的字符串带颜色显示,但是不能作为流输出,因为包含dom元素
  let resultArr = []
  sectionArr.forEach((section, index) => {
    let sec = Object.assign({}, section)
    let opt = {
      hasColor: hasColor
    }
    // 如果是basic,它的path也会需要params的数据
    if (sec.type === 'basic') {
      // TODO: 这里这两个或太难过了...我知道这么用不好!!!后面再改吧QWQ
      // 这里应该只匹配它之后的(下一个basic前的)可能有的params
      // 使用index来判断
      let nextParamIndex = _.findIndex(sectionArr, {type: 'params'}, index + 1)
      let nextBasicIndex = _.findIndex(sectionArr, {type: 'basic'}, index + 1)
      // console.log('now ' + index)
      // console.log('nextParamIndex ' + nextParamIndex)
      // console.log('nextBasicIndex ' + nextBasicIndex)
      // console.log('------------------------')
      let paraSec
      if (~nextBasicIndex){
        if (~nextParamIndex && nextParamIndex < nextBasicIndex) {
          paraSec = sectionArr[nextParamIndex]
        }
        else {
          paraSec = {}
        }
      }
      else {
        paraSec = sectionArr[nextParamIndex] || {}
      }

      let keys = Array.from(paraSec.input || [], item => item.keyword)
      opt.keys = keys
    }
    let result = convert(sec, opt)
    resultArr.push(result)
  })
  let result = resultArr.join('')
  return result.trim() || '还没有内容咕╮(╯▽╰)╭...\n\n但添加了内容你就看不到萌萌的提示君了(●\'◡\'●)ﾉ♥...\n\n做选择吧,要我还是要文档(╬￣皿￣)凸...'
}
