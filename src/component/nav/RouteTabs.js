import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs } from '@mui/material';
import FitbitIcon from '@mui/icons-material/Fitbit';
import AppsIcon from '@mui/icons-material/Apps';

function RouteTabs () {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const tabSx = { padding: '4px', minWidth: '60px' }
  return (
    <Tabs
      orientation="vertical"
      value={value}
      onChange={handleChange}
      sx={{ borderRight: 1, borderColor: 'divider', height: '100%' }}
    >
      <Tab
        component={Link}
        to='/entity'
        icon={<FitbitIcon />}
        label="分类"
        sx={tabSx} 
      />
      <Tab
        component={Link}
        to='/contents'
        icon={<AppsIcon />}
        label="内容"
        sx={tabSx}
      />
    </Tabs>
  )
}

export default RouteTabs;