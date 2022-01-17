import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AppBar, Box, Tabs, Tab } from '@mui/material'
import CatalogTree from './CatalogTree'

import { getCatalog } from '../../apis/catalog'

function Catalog() {
  let [searchParams, setSearchParams] = useSearchParams()
  const [rootId, setRootId] = useState('')
  const [roots, setRoots] = useState([])
  const [catalogs, setCatalogs] = useState([])

  useEffect(() => {
    const catalog = searchParams.get('catalog')
    getCatalog(catalog)
      .then(data => {
        const { list, match } = data
        const root = match?.parents?.[0] || match?.id || list[0]?.id
        setRootId(root)
        setRoots(list)
        setCatalogs(list.find(item => item.id === root).children)
      })
  },[searchParams])

  const handleChange = (event, id) => {
    setSearchParams({ catalog: id })
    setRootId(id)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={rootId}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
        >
          {roots.map(({ id, label, }) => (
            <Tab key={id} value={id} label={label} />
          ))}
        </Tabs>
      </AppBar>
      <CatalogTree nodes={catalogs} />
    </Box>
  )
}

export default Catalog
