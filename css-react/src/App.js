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
      {/* Inline CSS */}
      {/* A primeira chave é para inserir algo dinâmico, a segunda, um objeto */}
      <p style={{color: "blue", padding: "25px", borderTop: "6px solid red"}}>Esse elemento foi estilizado na própia tag. Sendo não recomendado</p>
    </div>
  );
}

export default App;
