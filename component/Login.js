import { useWeb3 } from "@3rdweb/hooks"
import Image from "next/image";

const Login = () => {
  const { connectWallet, address, error } = useWeb3();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-100">
      {address ? (
        <p className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300 font-mono font-medium cursor-pointer duration-100">
          Connected
        </p>
      ) : (
          <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
          onClick={()=>connectWallet("injected")}>
            <Image className="mr-2 -ml-1 w-6 h-5" src="/images/metamask.svg" width={25} height={25}/>
          Login with MetaMask
        </button>
      )}
    </div>
  );
};

export default Login;