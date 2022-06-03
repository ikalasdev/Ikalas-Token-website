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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512" }} className='VideoIcons mediaColor'>
                    <path d="M507 146s-6-38-21-55c-19-22-41-22-51-23-71-5-179-6-179-6s-108 1-179 6c-10 1-32 2-51 23-16 17-21 55-21 55s-5 45-5 90v41c0 45 5 89 5 89s6 38 21 55c19 22 45 21 56 24 41 4 174 5 174 5s108 0 179-6c10-1 32-2 51-23 15-17 21-55 21-55s5-45 5-89v-41c0-45-5-90-5-90" />
                    <path style={{ fill: "#1b2a4e" }} d="M194 167v191l168-93z" />
                  </svg>
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