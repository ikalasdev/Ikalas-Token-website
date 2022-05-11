import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Login from '../component/Login'
import Script from 'next/script'
import Header from '../component/Header'
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "regenerator-runtime/runtime";
import "../public/assets/css/custom.css";



function MyApp({ Component, pageProps }) {

  const supportedChainIds = [56];
  const connectors = {
    injected: {},
  };

  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Header/>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      
      <Script src='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js'/>
      <Script src="./assets/js/vendor.bundle.js"/>
      <Script src="./assets/js/theme.bundle.js"/>
    </ThirdwebWeb3Provider>

    
  )
}

export default MyApp
