import Link from 'next/link';
import Image from 'next/image';
import Login from './Login';
import LanguageButton from './LanguageButton';
import ThemeButton from './ThemeButton';
import { useState, useEffect } from 'react';
import { _tr } from "../services/translate"

const Navbar = () => {

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let header = document.querySelector('.NavBarBG');
      if (window.scrollY > 150) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    },[]);
  }, []);


  return (
    <nav className="navbar MobNavbarPos fixed-top navbar-expand-lg border-bottom-1 d-flex justify-content-around NavBarBG">
      <div className='mx-5 d-flex align-item-center position-absolute start-0'>
        <svg viewBox="0 0 3267 3021" xmlns="http://www.w3.org/2000/svg" className='logoColor' width={50} style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2" }}>
          <path d="m2058 254-900 1142 413 346-992 929 1054-808 1038 858S1341 1376 1342 1375l716-1121Zm-450 1521 25 17-258 200 233-217Zm-162-654-213 266 263 221-221-225 171-262Z" />
        </svg>
        <span className="navbar-brand mx-2 mt-2" width={50} height={50}>KIK</span>
      </div>

      <div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav-link-color" aria-current="page" href="#KIK">{_tr("NavLink1")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-color" href="#Ikalas">{_tr("NavLink2")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-color" href="#Stats">{_tr("NavLink3")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-color" href="#Roadmap">{_tr("NavLink4")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-color" href="#News">{_tr("NavLink5")}</a>
            </li>
            
          </ul>
        </div>
      </div>

      
      <div className='mx-5 position-absolute end-0 d-flex justify-content-center align-items-center'>
        <ThemeButton />
        <LanguageButton />
        <Login/>
      </div>
    </nav>
  );
};

export default Navbar;