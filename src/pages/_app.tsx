import { useEffect } from "react";

import type { AppProps } from "next/app";

import "../styles/main.css";
import "../styles/base.css";
import "../styles/embla.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.body.classList.add("theme-light"); // or 'theme-dark'
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
