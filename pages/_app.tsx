import type { AppProps } from "next/app";
import { useSyncLanguage } from "ni18n";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import Container from "../components/layouts/Container";
import { useLanguage } from "../hooks/useLanguage";
import i18n from "../ni18n.config";
import { FavoritesContextProvider } from "../stores/FavoritesContext";
import "../styles/app.scss";
function MyApp({ Component, pageProps }: AppProps) {
  const { userLanguage } = useLanguage();
  useSyncLanguage(userLanguage);
  useEffect(() => {
    require("preline");
  }, []);
  return (
    <I18nextProvider i18n={i18n}>
      <FavoritesContextProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </FavoritesContextProvider>
    </I18nextProvider>
  );
}
export default MyApp;
