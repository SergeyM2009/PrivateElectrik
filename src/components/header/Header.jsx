"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import MobileNav from "./MobileNav";
import { CONTACTS } from "@/constants/contacts";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    // Блокировка прокрутки body при открытом меню
    if (!menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__row}>
          {/* Левая часть: логотип */}
          <div className={styles.header__left__block}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="логотип"
                width={200}
                height={110}
                priority
                className={styles.header__logo}
              />
            </Link>
          </div>

          {/* Правая часть: контакты и меню */}
          <div className={styles.header__right__block}>
            <div className= {styles.ready__wrapper}>
            <span></span>
            <p className={styles.call__content__text}> Готов выехать</p>
            </div>
              <div className={styles.call}>
                <div className={styles.call__img}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className={styles.call__content}>
                  
                  <a href={`tel:${CONTACTS.landline.tel}`}className={styles.call__content__number}>
                                 {CONTACTS.landline.display}</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}


