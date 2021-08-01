import React from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <form action="/s">
        <input type="search" />
        <input type="submit" />
      </form>
    </div>
  );
}
