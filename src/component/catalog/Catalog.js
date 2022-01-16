import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AppBar, Box, Tabs, Tab } from '@mui/material'
import CatalogTree from './CatalogTree'

import { getCatalog } from '../../apis/catalog'

function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.id || '1'
  const [value, setValue] = useState(id)
  const [catalogs, setCatalogs] = useState([])

  useEffect(() => {
    getCatalog(value)
      .then(data => {
        setCatalogs(data)
      })
  }, [value])

  const handleChange = (event, id) => {
    setSearchParams({ id })
    setValue(id)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="作者" value="1" />
          <Tab label="年代" value="2" />
          <Tab label="体裁" value="3" />
        </Tabs>
      </AppBar>
      <CatalogTree nodes={catalogs} />
    </Box>
  )
}

export default Catalog
