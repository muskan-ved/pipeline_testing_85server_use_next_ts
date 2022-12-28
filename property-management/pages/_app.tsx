import '../styles/navbar.css'
// import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Header from './components/Header';
import FooterComp from './components/Footer';
import Home from './components/Home';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
     <Component {...pageProps} />
     <Header/>
     <Home/>
     <FooterComp/>
     </>
     )
}
