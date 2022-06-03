import Link from 'next/link';
import { _tr } from "../services/translate"

const Footer = () => {
  return (
    <footer className='bgGradiant py-5 pt-md-8'>

      <div className="container">
        <div className="d-flex justify-content-center text-center">
          <div className="col-12 col-md-4 col-lg-3">


            <svg viewBox="0 0 3267 3021" xmlns="http://www.w3.org/2000/svg" className='logoColor' width={85} height={85} style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2" }}>
              <path d="m2058 254-900 1142 413 346-992 929 1054-808 1038 858S1341 1376 1342 1375l716-1121Zm-450 1521 25 17-258 200 233-217Zm-162-654-213 266 263 221-221-225 171-262Z" />
            </svg>


            <p className="text-primary mb-2">
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