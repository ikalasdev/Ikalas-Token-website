import { useWeb3 } from "@3rdweb/hooks" 

const Login = () => {
const { connectWallet, address, error } = useWeb3();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-100">
    {address ? (
      <p className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300 font-mono font-medium cursor-pointer duration-100">
        {address}
      </p>
    ) : (
      <button
        className="px-4 py-2 rounded-md bg-purple-600 cursor-pointer hover:bg-purple-500 text-xl font-semibold duration-100 text-white"
        onClick={()=>connectWallet("injected")}
      >
        Connect Wallet
      </button>
    )}
  </div>
  );
};

export default Login;