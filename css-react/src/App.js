import logo from './logo.svg';
import './App.css';
import MyComponant from './components/MyComponant';
import { useState } from 'react';


function App() {
  const n = 15;
  const [name] = useState("Yuri");
  const redTitle = false;

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
      {/* CSS Inline dinâmico */}
      <h1 style={n < 10 ? ({color: "purple"}) : ({color: "green"})}>CSS dinâmico</h1>
      <h1 style={n > 10 ? ({color: "purple"}) : ({color: "green"})}>CSS dinâmico</h1>
      {name === "Yuri" && <h1 style={name === "Yuri" ? ({color: "green", backgroundColor: "yellow"}) : null}>Teste de nome: De fato, o nome é "{name}"</h1>}
      {/*  Class dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título terá classe dinâmica</h2>
    </div>
  );
}

export default App;
