import type { AppProps } from "next/app";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import { useEffect } from "react";
import Container from "../components/Container";
import { useLanguage } from "../hooks/useLanguage";
import { ni18nConfig } from "../ni18n.config";
import "../styles/app.scss";
function MyApp({ Component, pageProps }: AppProps) {
  const { userLanguage, handleLanguageChange } = useLanguage();
  useSyncLanguage(userLanguage)
  useEffect(() => {
    require("preline");
  }, []);
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
export default appWithI18Next(MyApp,ni18nConfig);
