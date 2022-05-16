import Link from 'next/link';
import Image from 'next/image';
import Login from './Login';

const Navbar = () => {



  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom-1 border-light d-flex justify-content-around">
      <div className='mx-5 d-flex align-item-center position-absolute start-0'>
        <Image src="/images/logo_bgLess.png" className='rounded-circle' width={50} height={50} />
        <span className="navbar-brand mx-2 mt-2" width={50} height={50}>KIK</span>
      </div>

      <div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#KIK">What's KIK?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Ikalas">What's Ikalas?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Stats">Statistics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Roadmap">Roadmap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#News">News</a>
            </li>
            
          </ul>
        </div>
      </div>

      <div className='mx-5 position-absolute end-0'><Login /></div>
    </nav>
  );
};

export default Navbar;