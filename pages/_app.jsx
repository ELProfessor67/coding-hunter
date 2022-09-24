// pages/_app.js
import '../styles/globals.css'
import Nav from '../component/Nav';

export default function MyApp({ Component, pageProps }) {
  return(
      <>
        <Nav/>
        <Component {...pageProps} />
      </>
    );
}