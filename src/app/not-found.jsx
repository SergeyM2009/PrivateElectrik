"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Parallax from "parallax-js";
import styles from "./not-found.module.scss";

export default function NotFound() {
  const sceneRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const parallax = new Parallax(sceneRef.current);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 380);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      parallax.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div
          ref={sceneRef}
          className={styles.scene}
          data-hover-only="false"
        >
          <div
            className={styles.circle}
            data-depth="1.2"
          ></div>

          <div
            className={styles.one}
            data-depth="0.9"
          >
            <div className={styles.content}>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
            </div>
          </div>

          <div
            className={styles.two}
            data-depth="0.6"
          >
            <div className={styles.content}>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
            </div>
          </div>

          <div
            className={styles.three}
            data-depth="0.4"
          >
            <div className={styles.content}>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
              <span className={styles.piece}></span>
            </div>
          </div>

          <p
            className={styles.p404}
            data-depth="0.5"
          >
            404
          </p>

          <p
            className={styles.p404}
            data-depth="0.1"
          >
            404
          </p>
        </div>

        <div className={styles.text}>
          <article>
            <p>
              К сожалению, такой страницы нет
              <br />
              Но можно вернуться
              {isMobile && <br />}
             &nbsp; обратно на сайт
            </p>

            <Link
              href="/"
              className={styles.button}
            >
              Вернуться
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}