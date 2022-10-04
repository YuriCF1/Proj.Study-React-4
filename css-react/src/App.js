import logo from './logo.svg';
import './App.css';
import MyComponant from './components/MyComponant';


function App() {
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponant />
      <p>Parágrafo do App.js</p>
    </div>
  );
}

export default App;
