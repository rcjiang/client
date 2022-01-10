import { Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import RouteTabs from './component/nav/RouteTabs'
import ClassMgt from './component/class/ClassMgt'
import ContentMgt from './component/content/ContentMgt'
import Fields from "./component/fields/Fields"
import Field from "./component/fields/Field"
import Contents from './component/content/Contents'
import Content from './component/content/Content'

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
            <Route path=":entityId">
              <Route index element={<Fields />} />
              <Route path=":fieldId" element={<Field />} />
            </Route>
          </Route>
          <Route path="/contents" element={<ContentMgt />} >
            <Route index element={<Contents />} />
            <Route path="detail" element={<Content />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
