import Header from "@/components/header/Header";
import ScrollTop from "@/components/scrollTop/ScrollTop";
import ScrollToTop from "@/components/ScrollToTop";



export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <ScrollToTop />
      <ScrollTop />

      {children}
    </>
  );
}