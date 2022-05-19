import Link from 'next/link';
import Image from 'next/image';
import Login from './Login';
import LanguageButton from './LanguageButton';
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
    <nav className="navbar MobNavbarPos fixed-top navbar-expand-lg navbar-dark border-bottom-1 border-light d-flex justify-content-around NavBarBG">
      <div className='mx-5 d-flex align-item-center position-absolute start-0'>
        <Image src="/images/logo_bgLess.png" className='rounded-circle' width={50} height={50} />
        <span className="navbar-brand mx-2 mt-2" width={50} height={50}>KIK</span>
      </div>

      <div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#KIK">{_tr("NavLink1")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Ikalas">{_tr("NavLink2")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Stats">{_tr("NavLink3")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Roadmap">{_tr("NavLink4")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#News">{_tr("NavLink5")}</a>
            </li>
            
          </ul>
        </div>
      </div>

      
      <div className='mx-5 position-absolute end-0 d-flex justify-content-center align-item-center'>
        <LanguageButton />
        <Login />
      </div>
    </nav>
  );
};

export default Navbar;