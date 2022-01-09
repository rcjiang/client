import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { ListItemButton } from '@mui/material'

const Action = (
  <IconButton edge="end" aria-label="delete" size="small">
    <DeleteOutlinedIcon />
  </IconButton>
)

export default function EntityItem ({id, name, selected, changeSelect}) {
  return (
    <ListItem
      key={id}
      className="MuiListItem-hover"
      secondaryAction={ Action }
      disablePadding
    >
      <ListItemButton
        selected={selected}
        onClick={changeSelect}
      >
        <ListItemIcon sx={{ minWidth: '36px' }}>
          <FolderOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary={name}
        />
      </ListItemButton>
    </ListItem>
  )
}
