import React from "react";
import styles from "./AnimalListItem.module.css";
import { Button } from "../Button/Button";

export const AnimalListItem = (props: any) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gato_%282%29_REFON.jpg/1200px-Gato_%282%29_REFON.jpg"
        alt=""
        height={200}
      />
      <div className={styles.detailsContainer}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>

      <Button title="Detalhes" />
    </div>
  );
};
