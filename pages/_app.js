import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
