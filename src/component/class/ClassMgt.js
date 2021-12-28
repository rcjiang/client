import Entities from '../entities/Entities';
import Fields from '../fields/Fields';


function ClassMgt () {
  return (
    <div
      className="lay-lf"
      style={{ width: '100%', overflow: 'hidden' }}
    >
      <Entities />
      <div style={{paddingLeft:  '10px' }}>
        <Fields />
      </div>
    </div>
  )
}

export default ClassMgt