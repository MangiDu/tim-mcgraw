import Chance from 'chance'
let chance = new Chance()

import { oneOf } from './utils'

const TYPE = ['string', 'number', 'boolean', 'object', 'array', 'enum']

function randomData (type, option = {}) {
  let result
  if (oneOf(type, TYPE)) {
    switch (type) {
      case 'string':
        result = chance.string()
        break
      case 'number':
        result = chance.natural()
        break
      case 'boolean':
        result = chance.bool()
        break
      default:

    }
  }
  return result
}

export default randomData
