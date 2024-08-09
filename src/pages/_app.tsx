import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <main className="font-subversia-regular">
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
