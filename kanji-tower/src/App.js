import logo from './logo.svg';
import './App.css';
import Tower from './components/Tower';
import PointsBar from './components/PointsBar';
import AppBody from './components/AppBody';

function App() {
  return (
    <div className="App">
      <PointsBar />
      <AppBody />
    </div>
  );
}

export default App;
