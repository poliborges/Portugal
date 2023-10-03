import React from "react";
import styles from "./PetInformation.module.css";
import { Container } from "../Container/Container";

export const PetInformation = () => {
  return (
    <Container className={styles.test}>
      <h1 className={styles.title}>Informações</h1>

      <div className={styles.container}>
        <label htmlFor="nome">Nome</label>
        <input type="text" />
      </div>

      <div className={styles.container}>
        <label htmlFor="Raça">Raça</label>
        <input type="text" placeholder="" id="Raça" />
      </div>

      <div className={styles.container}>
        <label htmlFor="Peso">Peso</label>
        <input type="text" placeholder="" id="Cor" />
      </div>
    </Container>
  );
};
