import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import List from '@mui/material/List'
import { getEntityList } from '../../apis/entity'
import EntityItem from './EntityItem'
import './List.css';

function Entities () {
  const { entityId } = useParams()
  const [entityNames, setEntityNames] = useState([])
  const navigate = useNavigate()
  const changeSelect = id => {
    navigate(String(id))
  }

  useEffect(() => {
    getEntityList().then(data => {
      setEntityNames(data)
      const firstEntityId = data[0]?.id
      if (!entityId && firstEntityId) {
        navigate(String(firstEntityId))
      }
    })
  }, [entityId, navigate])

  const Items = entityNames.map(({ id, name }) => (
    <EntityItem
      key={id}
      id={id}
      name={name}
      selected={id === Number(entityId)}
      changeSelect={() => changeSelect(id)}
    />
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