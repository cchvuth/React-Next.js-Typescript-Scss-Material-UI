import type { AppProps /*, AppContext */ } from 'next/app';
import '../scss/_global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
