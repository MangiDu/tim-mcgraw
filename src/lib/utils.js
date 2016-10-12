export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

export function isObjEmpty (obj) {
  if (typeof obj !== 'object') return false
  for (let key in obj) {
    return false
  }
  return true
}
