import TreeView from '@mui/lab/TreeView'
import TreeItem from '@mui/lab/TreeItem'
import Label from '@mui/icons-material/Label'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

export default function CatallogTree({ config = {}, nodes = [], TItem = TreeItem }) {
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
        id,
        label,
        icon,
        children,
        ...others
      } = item

      return (
        <TItem
          key={id}
          nodeId={id}
          labelText={label}
          labelIcon={icon || Label}
          {...others}
        >
          {children && createNode(children)}
        </TItem>
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
