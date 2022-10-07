import React from "react";
import styles from "./Title.module.css";

const Title = () => {
  return (
    <div>
      {/* <h1 className={styles['my-titles']}>Título exemplar</h1> || Se eu fosse usar com traços, seria assim. Mas não é recomendado */}
      <h1 className={styles.my_title}>Título exemplar</h1>
    </div>
  );
};

export default Title;
