import Link from 'next/link';
import stylesFooter from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={stylesFooter.footer}>
        <div className={stylesFooter.container}>
            <a href="https://ikalas.com/app" target="_blank">
              Powered by Ikalas
            </a>
            <div className={stylesFooter.media}>
                <a>Github</a>
                <a>Twitter</a>
                <a>Instagram</a>
            </div>
        </div>
        
    </footer>
  );
};

export default Footer;