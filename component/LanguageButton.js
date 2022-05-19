import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import { useCookies } from 'react-cookie';



const LanguageButton = () => {
    const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
    const router = useRouter();
    const { locale } = router;
  
    const switchLanguage = (e) => {
      const locale = e.target.value;
      router.push('/','/', { locale });
      if(cookie.NEXT_LOCALE !== locale){
        setCookie("NEXT_LOCALE", locale, { path: "/" });
      }
    } 

    return (
        <div className="d-flex align-items-center justify-center min-h-screen py-2 mx-5 lang-buttonMob">
            <select
                className="btn btn-outline-dark d-flex align-items-center text-light px-2 py-1 border-1 border-light rounded"
                onChange={switchLanguage}
                defaultValue={locale}
            >
                <option value="en" className="bg-dark">EN</option>
                <option value="fr" className="bg-dark">FR</option>
            </select>
        </div>
    );
};

export default LanguageButton;