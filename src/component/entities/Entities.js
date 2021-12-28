import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const data = [
    '作品',
    '作者',
    '体裁'
]

function Entities () {
    const Action = (
        <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
        </IconButton>
    )

    const Items = data.map(item => (
        <ListItem
            key={item}
            secondaryAction={ Action }
        >
            <ListItemAvatar>
                <Avatar>
                    <FolderIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={item}
            />
        </ListItem>
    ))

    return (
        <List
            dense={true}
            sx={{ width: '200px', borderRight: 1, borderColor: 'divider' }}
        > 
            {Items}
        </List>
    )
}

export default Entities