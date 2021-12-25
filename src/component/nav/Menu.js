import React, { useState } from "react";
import { Tab, Tabs } from '@mui/material';
import FitbitIcon from '@mui/icons-material/Fitbit';
import AppsIcon from '@mui/icons-material/Apps';

function Menu () {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const tabSx = { padding: '4px', minWidth: '60px' }
  return (
    <nav>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: 'divider', height: '100%' }}
        >
          <Tab
            icon={<FitbitIcon />}
            label="分类"
            sx={tabSx} 
          />
          <Tab
            icon={<AppsIcon />}
            label="内容"
            sx={tabSx}
          />
        </Tabs>
    </nav>
  )
}

export default Menu;