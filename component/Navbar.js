import Link from 'next/link';
import Image from 'next/image';
import Login from './Login';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom-1 border-light d-flex justify-content-between">
        <div className='mx-5 d-flex align-item-center'>
          <Link href="/" className=''>
            <Image src="/images/logo_bgLess.png" className='rounded-circle' width={50} height={50} />
          </Link>
          <Link href="/">
            <span className="navbar-brand mx-2 mt-1" width={50} height={50}>KIK</span>
          </Link>
        </div>

        <div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/swap">Swap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/roadmap">Roadmap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mx-5'><Login /></div>

      
    </nav>
  );
};

export default Navbar;