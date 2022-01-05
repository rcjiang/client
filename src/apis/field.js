function getFields (parent = '') {
  return fetch('/api/fieldList?parent=' + parent).then(res => {
    const data = res.json()
    return data
  })
}

function getField (id) {
  return fetch(`/api/field/${id}`).then(res => {
    const data = res.json()
    return data
  })
}

export {
  getFields,
  getField
}
