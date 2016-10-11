import converter from './converter'

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

// 现在还没那么多的section,先这么写,后面肯定要改
// 如果情况复杂可能还是要自己写些工具方法
function getSection(arr, type) {
  for (let item of arr) {
    if (item.type === type) {
      return item
    }
  }
}

export function toDoc (sectionArr, option) {
  let resultArr = []
  sectionArr.forEach((section, index) => {
    let sec = Object.assign({}, section)
    let opt = {}
    // 如果是basic,它的path也会需要params的数据
    if (sec.type === 'basic') {
       let paraSec = getSection(sectionArr, 'params')
       let keys = Array.from(paraSec.input, item => item.keyword)
       opt.keys = keys
    }
    let result = convert(sec, opt)
    resultArr.push(result)
  })
  return resultArr.join('')
}
