import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Navigation />
    </>
  )
}

export default MyApp
