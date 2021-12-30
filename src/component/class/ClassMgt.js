import { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import Entities from '../entities/Entities';
import { getEntityList } from '../../apis/entity'

function ClassMgt () {
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

  return (
    <div
      className="lay-lf"
      style={{ width: '100%', overflow: 'hidden' }}
    >
      <Entities
        data={entityNames}
        handleSelect={changeSelect}
        selected={Number(entityId)}
      />
      <div style={{paddingLeft:  '10px' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default ClassMgt