import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../../public/assets/css/main.css";
import "../../public/assets/css/themes/_index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMain from "@/layout/TopBar";
import Footer from "@/layout/footer/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <HeaderMain/>
      <main>
        <Component {...pageProps} />
      </main>
      { <Footer /> }
    </>
  );
}