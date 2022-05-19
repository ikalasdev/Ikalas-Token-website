import Image from "next/image";
import Link from "next/link";



const LanguageButton = () => {
    var isFR = true;
    if (typeof window !== 'undefined') {
        var url = window.location.href;
        var baseURL = url.split('/')[0] + '//' + url.split('/')[2];
        url = url.toLowerCase();
        
        if (url.includes("/en")) 
        {
            isFR = false;
        } else {
            isFR = true;
        }

    }
    return (
        <div className="flex flex-col align-items-center justify-center min-h-screen py-2 bg-slate-100 mx-5">
            {isFR ? (
                <Link href="http://localhost:9000/en">
                    <div className="btn btn-outline-dark d-flex align-items-center text-light px-2 py-1 border-1 border-light rounded">
                        <span className="mx-2">EN</span>
                    </div>
                </Link>
            ) : (
                <Link href="/fr">
                    <div className="btn btn-outline-dark d-flex align-items-center text-light px-2 py-1 border-1 border-light rounded">
                        <span className="mx-2">FR</span>
                    </div>
                </Link>
            )}
        </div>
    );
};

    export default LanguageButton;