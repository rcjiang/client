import { Outlet } from 'react-router-dom';
import Catalog from '../catalog/Catalog';

function ContentMgt () {
  return (
    <div
      className="lay-lf"
      style={{ width: '100%', overflow: 'hidden' }}
    >
      <Catalog />
      <div style={{paddingLeft:  '10px' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default ContentMgt
