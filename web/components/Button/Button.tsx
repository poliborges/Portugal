"use client";
import React from "react";
import styles from "./Button.module.css";
import { stat } from "fs/promises";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  //como colocar o style abaixo? se ao lado da tag ja tem o evento do onclick?

  const navigate = () => {
    alert("naveguei");
  };

  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

//export button la em cima e export default aqui em baixo?
