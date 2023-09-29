import React from "react";
import styles from "./PetProfile.module.css";
import { Container } from "../Container/Container";

export const PetProfile = (props: any) => {
  return (
    <Container className={styles.test}>
      <img
        className={styles.img}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gato_%282%29_REFON.jpg/1200px-Gato_%282%29_REFON.jpg"
        alt=""
        height={100} //??
        width={100}
      />
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </Container>
  );
};
