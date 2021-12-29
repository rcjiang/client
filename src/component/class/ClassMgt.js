import { useEffect, useState } from 'react';
import Entities from '../entities/Entities';
import Fields from '../fields/Fields';
import { getEntityList } from '../../apis/entity'
import { getFields } from '../../apis/field'


function ClassMgt () {
  const [entityNames, setEntityNames] = useState([])
  const [selectedEntity, setSelectedEntity] = useState(0)
  const [fieldList, setFieldList] = useState([])

  useEffect(() => {
    getEntityList().then(data => {
      setEntityNames(data)
      const firstId = data[0]?.id
      if (firstId) {
        setSelectedEntity(firstId)
        queryFields(firstId)
      }
    })
  }, [])

  const queryFields = id => {
    setSelectedEntity(id)
    getFields(id).then(data => {
      setFieldList(data)
    })
  }

  return (
    <div
      className="lay-lf"
      style={{ width: '100%', overflow: 'hidden' }}
    >
      <Entities
        data={entityNames}
        handleSelect={queryFields}
        selected={selectedEntity}
      />
      <div style={{paddingLeft:  '10px' }}>
        <Fields data={fieldList} />
      </div>
    </div>
  )
}

export default ClassMgt