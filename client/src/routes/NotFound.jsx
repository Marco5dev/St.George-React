// eslint-disable-next-line no-unused-vars
import React from "react";

function Home() {
  document.title = "All Youssef Travel || Home";
  return (
    <>
      <main>
        <article>
          <section
            className="section feature feature-phone"
            aria-label="feature"
            id="recent-post"
          >
            <div className="container">
              <h2 className="headline headline-2 section-title">
                <span className="span">404 Not Found</span>
              </h2>

              <p className="section-text">
                sorry we could not find that page you can go to the
                <a href="/">Home Page</a> <br />
                if you think that there is a problem you can contact the
                developer
                <a
                  href="https://www.facebook.com/marco.webdeveloper/"
                  className="copyright-link"
                >
                  Mark Maher
                </a>
              </p>
            </div>

            <img
              src="/images/shadow-3.svg"
              width="500"
              height="1500"
              loading="lazy"
              alt=""
              className="feature-bg"
            />
          </section>
        </article>
      </main>
    </>
  );
}

export default Home;
