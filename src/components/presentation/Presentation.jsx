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

  <div className={`container ${styles.content}`}>
    
    <div className={styles.left}>
      <div className={styles.left__ready}> <span></span>Готов к выезду</div>
      <h1 className={styles.title}> <span>Услуги электрика</span> в Москве - выезд за 30 минут</h1>
      <p className={styles.text}>Частный электрик с опытом более 17 лет. Решу вашу проблему быстро и качественно. Бесплатный выезд и консультация.</p>
      <div className={styles.lozung__wrapper}>
          
      <div><span className={styles.lozung__icon}><i className="fa-solid fa-check"></i></span>Без посредников и переплат</div>
      <div><span className={styles.lozung__icon}><i className="fa-solid fa-check"></i></span>Гарантия до 5 лет на работы</div>
      <div><span className={styles.lozung__icon}><i className="fa-solid fa-check"></i></span>Оплата после выполнения работ</div>
       
      

      </div>
    </div>

    <div className={styles.right}>
      правый блок
    </div>
  </div>
</div>
  </>
  );
}


