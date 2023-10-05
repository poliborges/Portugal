import React from "react";
import styles from "./PetInformation.module.css";
import { Container } from "../Container/Container";

export const PetInformation = (props: any) => {
  return (
    <Container className={styles.content}>
      <h1 className={styles.title}>Informações</h1>

      <div className={styles.container}>
        <label className={styles.label} htmlFor="nome">
          Nome
        </label>
        <input
          type="text"
          value={props.name}
          onChange={(event) => props.onNameChange(event.target.value)}
        />
      </div>

      <div className={styles.container}>
        <label className={styles.label} htmlFor="Raça">
          Raça
        </label>
        <input
          type="text"
          value={props.breed}
          onChange={(event) => props.onBreedChange(event.target.value)}
        />
      </div>

      <div className={styles.container}>
        <label className={styles.label} htmlFor="Peso">
          Peso
        </label>
        <input
          type="text"
          value={props.weight}
          onChange={(event) => props.onWeightChange(event.target.value)}
        />
      </div>
    </Container>
  );
};
