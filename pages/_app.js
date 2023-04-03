import Navbar from "../components/navbarcomponent/Navbar";
import styles from "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;