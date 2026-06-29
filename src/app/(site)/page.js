import Image from "next/image";
import styles from "./page.module.scss";
import Presentation from "@/components/presentation/Presentation";

export default function Home() {
  return (
   <main >
     
      <section className={styles.hero}>
    <Presentation/>
      </section>
      <section className={styles.hero}>
    компонент 2
      </section>
      <section className={styles.hero}>
    компонент 3
      </section>

    </main>


  
  );
}
