"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./AnimalList.module.css";
import { AnimalListItem } from "../AnimalListItem/AnimalListItem";
import { getPets } from "@/api/api";
import { PetResult } from "@/api/api.props";

export const AnimalList = () => {
  const [listOfPets, setListOfPets] = useState<PetResult[]>([]);

  useEffect(() => {
    const atualizarListaDeCats = async () => {
      const list = await getPets();
      list && setListOfPets(list);
    };
    atualizarListaDeCats();
  }, []);

  return (
    <div className={styles.list}>
      {listOfPets.map((pet) => (
        <AnimalListItem
          title={pet.name}
          img={pet.image}
          subtitle={pet.description}
        />
      ))}
    </div>
  );
};
