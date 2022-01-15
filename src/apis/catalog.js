function getCatalog (id = '') {
  return fetch('/api/catalog?id=' + id).then(res => {
    const data = res.json()
    return data
  })
}

export {
  getCatalog
}