import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { _tr } from "../services/translate"
import { useRouter } from "next/router";
import Cookie from "js-cookie";




const LanguageButton = () => {
    const [menu, setMenu] = useState(false);
    const router = useRouter();

    const changeLocale = (locale) => {
        window.localStorage.setItem("lang", locale);
        Cookie.set("userLocale", locale);
        router.push(router.asPath, router.asPath, {
          locale,
        });
        setMenu(false);
      };

    return (
        <div
            className={menu ? "dropdown show" : "dropdown"}
            style={{ zIndex: "1" }}
          >
            <button
              className="btn btn-xs dropdown-toggle text-light"
              type="button"
              onClick={() => setMenu(!menu)}
              id="dropdownMenuExtraSmall"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {_tr(router.locale)}
            </button>
            <div
              className={
                menu
                  ? "dropdown-menu dropdown-menu-xs show bg-dark"
                  : "dropdown-menu dropdown-menu-xs bg-dark"
              }
              aria-labelledby="dropdownMenuExtraSmall"
            >
              <a onClick={() => changeLocale("en")} className="dropdown-item text-light">
                English
              </a>
              <a onClick={() => changeLocale("fr")} className="dropdown-item text-light">
                Français
              </a>
            </div>
          </div>
    );
};

export default LanguageButton;