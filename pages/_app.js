import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Login from '../component/Login'
import Script from 'next/script'
import Header from '../component/Header'
import Link from 'next/link'

import { ThirdwebWeb3Provider } from "@3rdweb/hooks";


import "regenerator-runtime/runtime";
import "../public/assets/css/custom.css";
import "../public/assets/css/news.css";


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
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />


      <Script src='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.js' />
      <Script src="./assets/js/vendor.bundle.js" />
      <Script src="./assets/js/theme.bundle.js" />
      <Script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"/>
      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"/>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"/>
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"/>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      
    </ThirdwebWeb3Provider>


  )
}

export default MyApp
