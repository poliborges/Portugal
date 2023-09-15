import React from "react";
import styles from "./AnimalList.module.css";

import { AnimalListItem } from "../AnimalListItem/AnimalListItem";

export const AnimalList = () => {
  return (
    <div className={styles.list}>
      <AnimalListItem title="Gato laranja" subtitle="Gato fofinho " />
      <AnimalListItem title="Gato preto" subtitle="Gato fofinho" />
      <AnimalListItem title="Gato preto" subtitle="Gato fofinho" />
      <AnimalListItem title="Gato preto" subtitle="Gato fofinho" />
      <AnimalListItem title="Gato preto" subtitle="Gato fofinho" />
      <AnimalListItem title="Gato preto" subtitle="Gato fofinho" />
      <AnimalListItem title="Gato preto" subtitle="Gato fofinho" />
      <AnimalListItem title="Gato preto" subtitle="Gato fofinho" />
    </div>
  );
};
