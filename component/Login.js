import { useWeb3 } from "@3rdweb/hooks"
import Image from "next/image";



const Login = () => {
  const { connectWallet, address, error } = useWeb3();
  return (
    <div className="flex flex-col align-items-center justify-center min-h-screen py-2 bg-slate-100">
      {address ? (
        <div 
        className="btn btn-outline-dark d-flex align-items-center text-light px-2 py-1 border-2 border-light rounded"
        >
          <span class="glowing-circle"></span>
          <span className="mx-2">Connected</span>
        </div>
      ) : (
        <div type="button" 
        className="btn btn-outline-dark d-flex align-items-center text-light px-2 py-1 border-2 border-light rounded"
        onClick={()=>connectWallet("injected")}>

          <Image src="/images/metamask.svg" width={20} height={20}/> 
          <span className="mx-2">Login with MetaMask</span>
        </div>
      )}
    </div>
  );
};

export default Login;