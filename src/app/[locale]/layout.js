import ReduxProvider from '@/redux/provider';
import '../../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImportBS from '@/importBS';
import Header from '@/app/[locale]/components/Header';

import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useTranslations,
} from 'next-intl';
import {notFound} from 'next/navigation';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({children, params}) {
  const locale = useLocale();
  const messages = useMessages();
  const t = useTranslations('navbar');

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <ImportBS />
      <body>
        <ReduxProvider>
          <ToastContainer />
          <Header home={t('home')} />
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}