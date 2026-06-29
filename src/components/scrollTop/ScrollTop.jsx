"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./scrollTop.module.scss";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  // прокрутка наверх
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // сброс таймера скрытия
  const resetInactivityTimer = () => {
    clearTimeout(timerRef.current);

    if (window.scrollY > 0) {
      setVisible(true);
    }

    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setVisible(false);
      } else {
        setVisible(true);
        resetInactivityTimer();
      }
    };

    const events = ["mousemove", "keypress", "scroll", "touchstart", "click"];

    events.forEach((event) => {
      window.addEventListener(event, resetInactivityTimer);
    });

    window.addEventListener("scroll", onScroll);

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetInactivityTimer);
      });
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
        className={`${styles.up_btn} ${visible ? styles.visible : ""}`}
    >
      <Image
        src="/up-arrow.png"
        alt="Наверх"
        width={40}
        height={40}
        priority
      />
    </button>
  );
}