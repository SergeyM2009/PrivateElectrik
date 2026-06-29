"use client";

import { useState } from "react";
import styles from "./price.module.scss";
import { priceRozetka } from "./data";

export default function Price() {
  const [search, setSearch] = useState("");

  const filteredData = priceRozetka.tableData.filter(item =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Цены на услуги</h1>

      <input
        type="text"
        placeholder="Поиск по названию услуги..."
        className={styles.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Услуга</th>
            <th className={styles.center}>Цена</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td className={styles.center}>
                  от {item.price} {item.unit}
                </td>
              </tr>
            ))
          ) : (
            <tr className={styles["no-results"]}>
              <td colSpan="2">Ничего не найдено</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}


