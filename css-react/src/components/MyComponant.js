import React from "react";
import "./MyComponant.css";

const MyComponant = () => {
  return (
    <div>
      <h1>CSS de componente</h1>
      <p>Este é o parágrafo do componente</p>
      <p className="my-comp-paragraph">
        Maneira certa de fazer o parágrafco. Usando classes próprias
      </p>
    </div>
  );
};

export default MyComponant;
