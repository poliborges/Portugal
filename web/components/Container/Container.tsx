import React from "react";
import styles from "./Container.module.css";

export const Container = (props: any) => {
  return (
    <div className={styles.container + " " + props.className}>
      {props.children}
    </div>
  );
};
