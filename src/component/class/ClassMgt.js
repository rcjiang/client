import { useEffect, useState } from 'react';
import Entities from '../entities/Entities';
import Fields from '../fields/Fields';
import { getEntityNames } from '../../apis/entity'


function ClassMgt () {
  const [entityNames, setEntityNames] = useState([])
  useEffect(() => {
    console.log(1)
    getEntityNames().then(names => setEntityNames(names))
  }, [])
  return (
    <div
      className="lay-lf"
      style={{ width: '100%', overflow: 'hidden' }}
    >
      <Entities data={entityNames} />
      <div style={{paddingLeft:  '10px' }}>
        <Fields />
      </div>
    </div>
  )
}

export default ClassMgt