import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import './App.css'
import RouteTabs from './component/nav/RouteTabs'
import ClassMgt from './component/class/ClassMgt'
import ContentMgt from './component/content/ContentMgt'
import Fields from "./component/fields/Fields"
import Field from "./component/fields/Field"

function App() {
  return (
    <div className="layout">
      <nav>
        <RouteTabs />
      </nav>
      <main>
        <Routes>
          <Route index element={<Navigate to="/entity" replace={true} />} />
          <Route path="/entity" element={<ClassMgt />} >
            <Route path=":entityId" element={<Outlet />}>
              <Route index element={<Fields />} />
              <Route path=":fieldId" element={<Field />} />
            </Route>
          </Route>
          <Route path="/contents" element={<ContentMgt />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
