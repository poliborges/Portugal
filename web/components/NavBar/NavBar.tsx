import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import React from "react";
import styles from "./Navbar.module.css";
import LogoCat from "../../app/assets/LogoCat.png";

const Logo = () => (
  <img
    className={styles.logo}
    src={LogoCat.src}
    alt="logo gato"
    title="logo do gato"
  />
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

const PlusButton = (props: any) => <div className={props.className}></div>;

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar className={styles.searchbar} />
      <div className={styles.plusbutton}>
        <FaPlus />
      </div>

      <ul className={styles.navbuttons}>
        <li className={styles.addbutton}>Adicionar</li>
      </ul>
    </nav>
  );
};
