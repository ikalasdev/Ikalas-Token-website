import { useWeb3 } from "@3rdweb/hooks"
import Image from "next/image";
import { _tr } from "../services/translate"



const Login = () => {
  const { connectWallet, address, error } = useWeb3();
  return (
    <div className="flex flex-col align-items-center justify-center min-h-screen py-2 bg-slate-100 MobDnone">
      {address ? (
        <div 
        className="btn d-flex align-items-center px-2 py-1 rounded"
        >
          <span className="glowing-circle mx-1"></span>
          <span className="mx-2">{_tr("LogButton2")}</span>
        </div>
      ) : (
        <div type="button" 
        className="btn btn-outline-transparent  d-flex align-items-center  px-2 py-1 rounded MobDnone"
        onClick={()=>connectWallet("injected")}>

          <Image src="/images/metamask.svg" width={20} height={20}/> 
          <span className="mx-2">{_tr("LogButton")}</span>
        </div>
      )}
    </div>
  );
};

export default Login;