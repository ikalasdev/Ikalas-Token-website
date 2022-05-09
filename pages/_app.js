import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Login from '../component/Login'
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "regenerator-runtime/runtime";
import '../styles/globals.css'


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
      
      <Navbar/>
      <Component {...pageProps} />
      <Login />
      <Footer/>
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
