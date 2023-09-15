import React from "react";
import styles from "./Navbar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarbuttons}>
        <button className={styles.buttonsubmit}>Adicionar Pet</button>
        <button className={styles.buttonsubmit}>Adicionar Pet</button>
        <div>
          <h1 className={styles.title}>Lista de Pets</h1>
        </div>

        <button className={styles.search}></button>
      </div>
    </div>
  );
};
