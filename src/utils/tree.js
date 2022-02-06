export function listToTree (list) {
  const map = new Map()
  const rootItems = []
  list.forEach(el => {
    const { id, parent } = el
    if (!map.has(id)) {
      map.set(id, {
        ...el,
        children: []
      })
    }

    const item = map.get(id)
    if (map.has(parent)) {
      map.get(parent).children.push(item)
    } else {
      rootItems.push(item)
    }
  })

  const roots = []
  rootItems.forEach(el => {
    const { parent } = el
    if (map.has(parent)) {
      map.get(parent).children.push(el)
    } else {
      roots.push(el)
    }
  })

  return {
    map,
    tree: roots
  }
}

export function getTree (list) {
  return listToTree(list).tree
}

export function getChildrenFromList (list, id) {
  const map = listToTree(list).map
  if (map.has(id)) {
    return map.get(id).children
  }
  return []
}

export function getListNotChildren (list, id) {
  const children = getChildrenFromList(list, id).map(item => item.id)
  const excludeIds = [id].concat(children)
  return list.filter(item => !excludeIds.includes(item.id))
}
