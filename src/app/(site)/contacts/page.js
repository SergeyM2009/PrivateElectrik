"use client";

import { CONTACTS } from "@/constants/contacts";
import styles from "./contacts.module.scss";

export default function Contacts() {
  return (
    <>
      <p> Наши контакты </p>

      <div
        className={`container ${styles.footer__right__block}`}
        style={{ color: "black", marginBottom: "50px" }}
      >

        {/* ADDRESS */}
        <div className={styles.contacts__adress}>

          <div
            className="fa-solid fa-location-dot"
            style={{ color: "var(--accent)" }}
          ></div>

          <div className={styles.adress}>
            {CONTACTS.adress}
          </div>

        </div>

        {/* PHONE */}
        <div className={styles.contacts__phone}>

          <div
            className="fa-solid fa-phone"
            style={{ color: "var(--accent)" }}
          ></div>

          <div className={styles.phone__number}>
            {CONTACTS.landline.display}
          </div>

        </div>

        {/* EMAIL */}
        <div className={styles.contacts__mail}>

          <div
            className="fa-solid fa-envelope"
            style={{ paddingTop: "4px", color: "var(--accent)" }}
          ></div>

          <div className={styles.mail}>
            {CONTACTS.mail}
          </div>

        </div>

        {/* SOCIAL */}
        <div className={styles.wdc__social}>

          <ul className={styles.list__inline}>

            <li>
              <a
                className="fa-brands fa-vk"
                href={`https://vk.com/id${CONTACTS.vkId}`}
                title="Vkontakte"
                target="_blank"
                rel="noopener noreferrer"
              />
            </li>

            <li>
              <a
                className="fa-brands fa-telegram"
                href={`https://t.me/${CONTACTS.telegram.replace(/\s+/g, "")}`}
                title="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              />
            </li>
          </ul>
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}