
function getEntityList() {
  return fetch('./api/entityList').then(res => {
    const data = res.json()
    return data
  })
}

function getEntityNames () {
  return getEntityList().then(data => data.map(item => item.name))
}

export {
  getEntityList,
  getEntityNames
}