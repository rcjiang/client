import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AppBar, Box, Tabs, Tab } from '@mui/material'
import CatalogTree from './CatalogTree'

function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.id || '1';
  const [value, setValue] = useState(id)

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
      <CatalogTree />
    </Box>
  )
}

export default Catalog
