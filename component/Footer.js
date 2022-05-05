import Link from 'next/link';
import stylesFooter from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={stylesFooter.footer}>
        <a href="https://ikalas.com/app" target="_blank">
          Powered by Ikalas
        </a>
    </footer>
  );
};

export default Footer;