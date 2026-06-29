import { Roboto, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";
import ScrollToTop from "@/components/ScrollToTop";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import Script from "next/script"; //Для яндекс-метрики


const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});


const inter = Inter({
  src: [
    {
      subsets: ["latin", "cyrillic"],
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-main",
  display: "swap",
});


export const metadata = {
  title: "Частный электрик",
  description: "Частный электрик, без посредников, разумные цены",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${roboto.variable} ${inter.variable}`}>
         <ScrollToTop />  {/*чтобы при переходе  со страницы на страницу мы оказались наверху страницы, а не в середине или еще где-то */ }
        {children}
                {/* Яндекс.Метрику располагаем внутри тега Script*/}
        {/* <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0];
              k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(YOUR_METRIKA_ID, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
          `}
        </Script> */}

        {/* Для noscript */}

        {/* <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/YOUR_METRIKA_ID" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript> */}
      </body>
    </html>
  );
}
