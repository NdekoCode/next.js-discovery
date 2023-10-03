import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("preline");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
