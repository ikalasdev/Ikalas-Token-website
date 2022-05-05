import Link from 'next/link';
import stylesNav from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={stylesNav.navbar}>
      <Link href='/'>
        <a className={stylesNav.linkNav}>Home</a>
      </Link>
      <Link href='/company'>
        <a className={stylesNav.linkNav}>The Platform</a>
      </Link>
      <Link href='/news'>
        <a className={stylesNav.linkNav}>News</a>
      </Link>
      <Link href='/about'>
        <a className={stylesNav.linkNav}>About</a>
      </Link>
    </div>
  );
};

export default Navbar;