import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import React from "react";
import styles from "./Navbar.module.css";
import LogoCat from "../../app/assets/LogoCat.png";

const Logo = () => (
  <img src={LogoCat.src} alt="logo gato" title="logo do gato" width={40} />
);

const SearchBar = (props: any) => (
  <div className={props.className}>
    <input
      className={styles.inputsearch}
      type="text"
      placeholder="Pesquisar..."
    />
    <FaSearch />
  </div>
);

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />

      <SearchBar className={styles.searchbar} />

      <div className={styles.addbutton}>Adicionar</div>
      {/* nao deu certo colocar o comp button */}

      <div className={styles.plusbutton}>
        <FaPlus />
      </div>
    </div>
  );
};
