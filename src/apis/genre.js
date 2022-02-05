function addGenare (data) {
  return fetch('/api/genre', {
    method: 'PUT',
    body: JSON.stringify(data)
  })
}

function delGenare (id) {
  return fetch(`/api/genre?id=${id}`, {
    method: 'DELETE'
  })
}

function getGenre (id) {
  return fetch(`/api/genre?id=${id}`).then(res => {
    const data = res.json()
    return data
  })
}

function getGenres () {
  return fetch('/api/genres').then(res => {
    const data = res.json()
    return data
  })
}


export {
  addGenare,
  delGenare,
  getGenre,
  getGenres,
}