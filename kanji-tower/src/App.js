import logo from './logo.svg';
import './App.css';
import Tower from './components/Tower';
import PointsBar from './components/PointsBar';


function App() {
  return (
    <div className="App">
      <PointsBar/>
      <Tower/>
    </div>
  );
}

export default App;
