import Link from 'next/link';
import stylesNav from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={stylesNav.navbar}>
      <Link href='/'>
        <a className={stylesNav.linkNav}>Home</a>
      </Link>
      <Link href='/news'>
        <a className={stylesNav.linkNav}>News</a>
      </Link>
      <Link href='/swap'>
        <a className={stylesNav.linkNav}>Swap</a>
      </Link>
      <Link href='/roadmap'>
        <a className={stylesNav.linkNav}>Roadmap</a>
      </Link>
      <Link href='/about'>
        <a className={stylesNav.linkNav}>About</a>
      </Link>
    </div>
  );
};

export default Navbar;