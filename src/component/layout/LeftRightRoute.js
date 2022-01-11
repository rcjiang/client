import { Outlet } from 'react-router-dom'
import LeftRight from './LeftRight'

export default function LeftRightRoute ({ children, sx }) {
  const style = {
    padding: '10px',
    ...sx
  }
  return (
    <LeftRight>
      { children }
      <div style={style}>
        <Outlet />
      </div>
    </LeftRight>
  )
}
