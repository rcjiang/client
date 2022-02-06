function addGenre (data) {
  return fetch('/api/genre', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

function delGenre (id) {
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
  return fetch('/api/genre/list').then(res => {
    const data = res.json()
    return data
  })
}


export {
  addGenre,
  delGenre,
  getGenre,
  getGenres,
}