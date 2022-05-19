import Link from 'next/link';
import { _tr } from "../services/translate"

const Footer = () => {
  return (
    <footer className='bg-gradient-dark-black py-5 pt-md-8 text-light'>

      <div className="container">
        <div className="d-flex justify-content-center text-center">
          <div className="col-12 col-md-4 col-lg-3">


            <img src="/images/logo_bgLess.png" alt="logo" width={85} height={85} />


            <p className="text-gray-700 mb-2">
            {_tr("FooterText")}
            </p>


            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0">
              <li className="list-inline-item list-social-item me-3">
                <a href='https://twitter.com/ikalasfr' className="text-decoration-none">
                  <img src="./assets/img/icons/social/twitter.svg" className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a href='https://www.linkedin.com/company/ikalas/' className="text-decoration-none">
                  <img src="./assets/img/icons/social/linkedin.svg" className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item">
                <a href="https://www.youtube.com/channel/UChkbRu3hQUNKdbKymsIQtzQ" className="text-decoration-none">
                  <img src="./assets/img/icons/social/youtube.svg" className="list-social-icon" alt="..." width={20} height={20} />
                </a>
              </li>
              <li className="list-inline-item list-social-item">
                <a href="https://github.com/ikalasdev" className="text-decoration-none">
                  <img src="./assets/img/icons/social/github.svg" className="list-social-icon" alt="..." />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;