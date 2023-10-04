import React from "react";
import styles from "./PetInformation.module.css";
import { Container } from "../Container/Container";

export const PetInformation = (props: any) => {
  return (
    <Container className={styles.test}>
      <h1 className={styles.title}>Informações</h1>

      <div className={styles.container}>
        <label htmlFor="nome">Nome</label>
        <input type="text" value={props.name} />
      </div>

      <div className={styles.container}>
        <label htmlFor="Raça">Raça</label>
        <input type="text" value={props.breed} />
      </div>

      <div className={styles.container}>
        <label htmlFor="Peso">Peso</label>
        <input type="text" value={props.weight} />
      </div>
    </Container>
  );
};
