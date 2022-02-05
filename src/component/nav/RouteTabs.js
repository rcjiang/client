import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Tab, Tabs } from '@mui/material'
import FitbitIcon from '@mui/icons-material/Fitbit'
import AppsIcon from '@mui/icons-material/Apps'
import AcUnitIcon from '@mui/icons-material/AcUnit'

const menus = [
  {
    to: '/entity',
    icon: <FitbitIcon />,
    label: '分类'
  },
  {
    to: '/contents',
    icon: <AppsIcon />,
    label: '内容'
  },
  {
    to: '/genre',
    icon: <AcUnitIcon />,
    label: '体裁'
  }
]

function RouteTabs () {
  const [value, setValue] = useState(0)
  const { pathname } = useLocation()
  const tabIndex = menus.findIndex(item => pathname.startsWith(item.to))
  useEffect(() => {
    if (tabIndex > -1) {
      setValue(tabIndex)
    }
  }, [tabIndex])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const tabSx = { padding: '4px', minWidth: '60px' }
  return (
    <Tabs
      orientation="vertical"
      value={value}
      onChange={handleChange}
      sx={{ borderRight: 1, borderColor: 'divider', height: '100%' }}
    >
      {menus.map(item => (
        <Tab
          key={item.to}
          to={item.to}
          icon={item.icon}
          label={item.label}
          component={Link}
          sx={tabSx} 
        />
      ))}
    </Tabs>
  )
}

export default RouteTabs
