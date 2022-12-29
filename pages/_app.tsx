import '../styles/navbar.css'
import "../styles/login.css";
import "../styles/signup.css";
import "../styles/globals.css";
import "../styles/HomePage.css";
import "../styles/landloard.css";
import "../styles/broker.css";


import type { AppProps } from 'next/app';
import Header from './components/Header';
import FooterComp from './components/Footer';
// import Welcome from './Welcome';

export default function App({ Component, pageProps }: AppProps) {

  return(
    <>
     <Header/>
     <Component {...pageProps} />
     {/* <Welcome/> */}
     <FooterComp/>
     </>
     )
}
