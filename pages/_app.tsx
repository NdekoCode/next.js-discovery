import type { AppProps } from "next/app";
import { useEffect } from "react";
import Container from "../components/Container";
import "../styles/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("preline");
  }, []);
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
