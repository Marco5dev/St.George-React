import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="card footer">
              <div className="footer-bottom">
                <p className="copyright">
                  &copy;
                  <a
                    href="https://www.facebook.com/saint.george.portsaid"
                    className="copyright-link"
                  >
                    St.George Church.
                  </a>
                </p>

                <ul className="social-list facebock">
                  <li className="facebook">
                    <a
                      href="https://www.facebook.com/saint.george.portsaid"
                      className="social-link"
                    >
                      <i className="fa-brands fa-facebook"></i>

                      <span className="span">Facebook</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                style={{
                  borderBlockStart: "1px solid var(--border-prussian-blue)",
                }}
              ></div>
              <div className="footer-bottom">
                <p className="copyright">
                  &copy; Developed by
                  <a
                    href="https://www.facebook.com/marco.webdeveloper/"
                    className="copyright-link"
                  >
                    Mark Maher.
                  </a>
                </p>

                <ul className="social-list facebock">
                  <li className="facebook">
                    <a
                      href="https://www.facebook.com/marco.webdeveloper/"
                      className="social-link"
                    >
                      <i className="fa-brands fa-facebook"></i>

                      <span className="span">Facebook</span>
                    </a>
                  </li>

                  <li className="github">
                    <a
                      href="https://github.com/Marco5dev"
                      className="social-link"
                    >
                      <i className="fa-brands fa-github"></i>

                      <span className="span">Github</span>
                    </a>
                  </li>

                  <li className="instagram">
                    <a
                      href="https://instagram.com/marco5dev"
                      className="social-link"
                    >
                      <i className="fa-brands fa-instagram"></i>

                      <span className="span">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <button
          id="scrollTo"
          className="back-top-btn"
          aria-label="back to top"
          data-back-top-btn
        >
          <ion-icon name="arrow-up-outline" aria-hidden="true"></ion-icon>
        </button>
      </>
    );
  }
}

export default Footer;
