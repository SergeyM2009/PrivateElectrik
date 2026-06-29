import Link from "next/link";
import styles from "./header.module.scss";

export default function MobileNav({ isOpen, setMenuOpen }) {
  
  const handleClose = () => {
    setMenuOpen(false);
    document.body.classList.remove("no-scroll"); 
  };

  return (
    <nav
      className={`${styles.mobile_nav} ${
        isOpen ? styles.mobile_nav__open : ""
      }`}
    >
      <ul className={styles.mobile_nav__list}>
        <li>
          <Link href="/" onClick={handleClose}>Главная</Link>
        </li>
        <li>
          <Link href="/staff" onClick={handleClose}>Наши мастера</Link>
        </li>
        <li>
          <Link href="/price" onClick={handleClose}>Цены</Link>
        </li>
        <li>
          <Link href="/contacts" onClick={handleClose}>Контакты</Link>
        </li>
        <li>
          <Link href="/about" onClick={handleClose}>О нас</Link>
        </li>
      </ul>
    </nav>
  );
}
