import './App.css'
import RouteTabs from './component/nav/RouteTabs'
import Routes from './route';

function App() {
  return (
    <div className="layout">
      <nav>
        <RouteTabs />
      </nav>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
