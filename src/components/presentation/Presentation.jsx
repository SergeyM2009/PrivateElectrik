import styles from "./presentation.module.scss";
import Image from "next/image";

export default function Presentation() {


  return (
    <>
  <div className={styles.highRow}>
    <div className={`container ${styles.wrapper}`}>
    <div>
      <span className={styles.row__icon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="var(--accent)"
          xmlns="http://www.w3.org/2000/svg"
        >
         <path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 11 5.2-.3 9-5.5 9-11V5l-9-4zm-1 15l-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z"></path>
        </svg>
      </span>Гарантия до 5 лет</div>
    <div>
      <span className={styles.row__icon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="var(--accent)"
          xmlns="http://www.w3.org/2000/svg"
        >
         <path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 11 5.2-.3 9-5.5 9-11V5l-9-4zm-1 15l-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z"></path>
        </svg>
      </span>17 лет на рынке</div>
    <div>
      <span className={styles.row__icon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="var(--accent)"
          xmlns="http://www.w3.org/2000/svg"
        >
         <path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 11 5.2-.3 9-5.5 9-11V5l-9-4zm-1 15l-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z"></path>
        </svg>
      </span>Без предоплаты</div>
    <div>
      <span className={styles.row__icon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="var(--accent)"
          xmlns="http://www.w3.org/2000/svg"
        >
         <path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 11 5.2-.3 9-5.5 9-11V5l-9-4zm-1 15l-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z"></path>
        </svg>
      </span>Страховка до 100 т.р.</div>
    </div>
  </div>
 <div className={styles.main__cont}>
     <Image
        src="/backgrounds/happy.webp"
        alt=""
        fill
        priority
        className={styles.bg}
      />
 </div>
  </>
  );
}


