async function importIcon (icons) {
  const iconMap = new Map()
  icons.forEach(([icon, callback]) => {
    if (!iconMap.has(icon)) {
      iconMap.set(icon, [])
    }
    iconMap.get(icon).push(callback)
  })
  // 期望按需导入每个图标，但是import(动态路径)会导致webpack打包存在严重的性能问题
  // return Promise.all(
  //   iconMap.keys().map(icon => {
  //     return import(`@mui/icons-material/${icon}`)
  //       .then(m => [icon, m.default])
  //       .catch(() => [icon, Label])
  //   }).then(icons => {
  //     icons.forEach(([key, icon]) => {
  //       iconMap.get(key).forEach(callback => callback(icon))
  //     })
  //   })
  // )

  const Icons = await import('@mui/icons-material')
  iconMap.forEach((callbacks, key) => {
    const icon = Icons[key]
    callbacks.forEach(callback => callback(icon))
  })
}

function getCatalogIcons (list) {
  return list.reduce((icons, node) => {
    if (node.icon) {
      icons.push([node.icon, icon => node.icon = icon])
    }
    if (node.children) {
      icons = icons.concat(getCatalogIcons(node.children))
    } 
    return icons
  }, [])
}

async function mapCatalogIcon (list) {
  await importIcon(getCatalogIcons(list))
  return list
}

export {
  mapCatalogIcon
}