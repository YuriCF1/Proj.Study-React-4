import React, { useState } from "react";
import Style from "./Cars.module.css";

const Cars = () => {
  // const [AllCars] = useState([
    const [AllCars, setAllCars] = useState( [
    {
      id: 1,
      marca: "Ford",
      cor: "vermelha",
    },
    {
      id: 2,
      marca: "Ferrari",
      cor: "branca",
    },
    {
      id: 3,
      marca: "Volvo",
      cor: "preto",
    },
  ]);
  return (
    <div>
      <ul>
        {/* LEMBRSE- () FUNCIONA PARA ABRIR FUNÇÕES COM OBJETOS NO REACT */}
        {AllCars.map((car) => (
          <li className={Style.car_sentence} key={car.id}>
            O carro da marca {car.marca}, tem a cor {car.cor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
