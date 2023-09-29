"use client";
import React from "react";
import styles from "./AnimalListItem.module.css";
import { Button } from "../Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const AnimalListItem = (props: any) => {
  const router = useRouter();
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.img} alt="" height={200} />
      <div className={styles.detailsContainer}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
      <link href="" />
      <Button onClick={() => router.push("/pet-detail")} title="Detalhes" />
    </div>
  );
};
