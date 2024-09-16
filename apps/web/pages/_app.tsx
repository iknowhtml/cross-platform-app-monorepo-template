import 'raf/polyfill';
import 'setimmediate';
import 'shared/tailwind/global.css';

import { Provider } from 'shared/providers';
import Head from 'next/head';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Example App</title>
        <meta name="description" content="Expo + Next.js Example App." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
