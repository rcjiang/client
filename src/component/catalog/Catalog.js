import * as React from 'react'
import { AppBar, Box, Tabs, Tab } from '@mui/material'
import CatalogTree from './CatalogTree'

function Catalog() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
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
