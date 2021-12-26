import { Routes, Route } from "react-router-dom"
import './App.css'
import RouteTabs from './component/nav/RouteTabs'
import ClassMgt from './component/class/ClassMgt'
import ContentMgt from './component/content/ContentMgt'

function App() {
  return (
    <div className="layout">
      <nav>
        <RouteTabs />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ClassMgt />} />
          <Route path="/contents" element={<ContentMgt />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
