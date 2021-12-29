
function getEntityList() {
  return fetch('./api/enrityList').then(res => {
    const data = res.json()
    console.log(data)
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