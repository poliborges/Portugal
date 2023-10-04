import React from "react";
import styles from "./PetProfile.module.css";
import { Container } from "../Container/Container";

export const PetProfile = (props: any) => {
  return (
    <Container>
      <img
        className={styles.img}
        src={props.image}
        alt=""
        height={100}
        width={100}
      />
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </Container>
  );
};
