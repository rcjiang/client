import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemButton } from '@mui/material';
import './List.css';

function Entities ({ data, selected, handleSelect }) {
  const Action = (
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  )

  const Items = data.map(({ id, name }) => (
    <ListItem
      key={id}
      className="MuiListItem-hover"
      secondaryAction={ Action }
      disablePadding
    >
      <ListItemButton
        selected={selected === id}
        onClick={() => handleSelect(id) }
      >
        <ListItemIcon sx={{ minWidth: '36px' }}>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText
          primary={name}
        />
      </ListItemButton>
    </ListItem>
  ))

  return (
    <List
      dense={true}
      sx={{ minWidth: '240px', borderRight: 1, borderColor: 'divider' }}
    > 
      {Items}
    </List>
  )
}

export default Entities