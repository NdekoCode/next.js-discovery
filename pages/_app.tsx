import type { AppProps } from "next/app";
import '../styles/app.scss';

import { useSyncLanguage } from 'ni18n';
import { I18nextProvider } from 'react-i18next';

import AppContainer from '../components/layouts/Container';
import { useLanguage } from '../hooks/useLanguage';
import i18n from '../ni18n.config';
import { FavoritesContextProvider } from '../stores/FavoritesContext';

function MyApp({ Component, pageProps }: AppProps) {
  const { userLanguage } = useLanguage();
  useSyncLanguage(userLanguage);
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <FavoritesContextProvider>
          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </FavoritesContextProvider>
      </I18nextProvider>
    </>
  );
}
export default MyApp;
