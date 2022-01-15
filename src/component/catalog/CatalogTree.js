import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TreeView from '@mui/lab/TreeView'
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem'
import Typography from '@mui/material/Typography'

import Label from '@mui/icons-material/Label'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    boxSizing: 'border-box',
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '&.Mui-expanded': {
      fontWeight: theme.typography.fontWeightRegular,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: 'var(--tree-view-color)',
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2)
    },
  },
}))

function StyledTreeItem(props) {
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    ...other
  } = props

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </Box>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      {...other}
    />
  )
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
}

export default function CatallogTree({ config = {}, nodes = [] }) {
  const defaultConfig = {
    defaultExpanded: [],
    defaultCollapseIcon: <ArrowDropDownIcon />,
    defaultExpandIcon: <ArrowRightIcon />,
    defaultEndIcon: <div style={{ width: 24 }} />,
    sx: {
      flexGrow: 1,
      maxWidth: 400,
      overflowY: 'auto'
    }
  }

  const treeConfig = {
    ...defaultConfig,
    ...config
  }

  const createNode = (list) => {
    return list.map(item => {
      const {
        id: nodeId,
        label: labelText,
        icon: labelIcon,
        children,
        ...others
      } = item

      return (
        <StyledTreeItem
          key={nodeId}
          nodeId={nodeId}
          labelText={labelText}
          labelIcon={labelIcon || Label}
          {...others}
        >
          {children && createNode(children)}
        </StyledTreeItem>
      )
    })
  }

  return (
    <TreeView
      {...treeConfig}
    >
      {createNode(nodes)}
    </TreeView>
  )
}
