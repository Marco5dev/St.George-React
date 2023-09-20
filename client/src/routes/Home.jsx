// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer.jsx";

function Home() {
  document.title = "St.George | Home";

  const [arrFathers, setArrFathers] = useState([]);
  const [arr2022, setArr2022] = useState([]);
  const [arr2021, setArr2021] = useState([]);

  useEffect(() => {
    fetch("/api/arrFathers")
      .then((response) => response.json())
      .then((result) => {
        setArrFathers(result);
      })
      .catch((error) => {
        console.error("Error fetching arrFathers:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/api/arr2022")
      .then((response) => response.json())
      .then((result) => {
        // Update the arr2022 state with the fetched data
        setArr2022(result);
      })
      .catch((error) => {
        console.error("Error fetching arr2022:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/api/arr2021")
      .then((response) => response.json())
      .then((result) => {
        // Update the arr2021 state with the fetched data
        setArr2021(result);
      })
      .catch((error) => {
        console.error("Error fetching arr2021:", error);
      });
  }, []);

  const blankImagePath = "/images/blank-photo.png";

  function replaceWithErrorImage(img) {
    // Check if the src attribute is empty.
    if (img.src === "") {
      // Set the src to the blank image path.
      img.src = blankImagePath;
    }
    img.src = blankImagePath;
  }

  return (
    <>
      <Header adminName="Marco" isPersistentLoggedIn={true} />
      <main>
        <article>
          {/* 
            - #church
         */}
          <section className="church" id="home" aria-label="home">
            <div className="container">
              <div className="church-content">
                <p className="church-subtitle">Hello Everyone!</p>

                <h1 className="headline headline-1 section-title">
                  We are <span className="span">St.George Church</span>
                </h1>
                <div className="input-wrapper"></div>
              </div>

              <div className="church-banner">
                <img
                  src="/images/pattern-2.svg"
                  width="27"
                  height="26"
                  alt="shape"
                  className="shape shape-1"
                />

                <img
                  src="/images/pattern-3.svg"
                  width="27"
                  height="26"
                  alt="shape"
                  className="shape shape-2"
                />
              </div>

              <img
                src="/images/shadow-1.svg"
                width="500"
                height="800"
                alt=""
                className="church-bg church-bg-1"
              />

              <img
                src="/images/shadow-2.svg"
                width="500"
                height="500"
                alt=""
                className="church-bg church-bg-2"
              />
            </div>
          </section>

          {/* 
      - #topWinners
    */}
          <section
            className="topWinners"
            id="topWinners"
            aria-labelledby="topic-label"
          >
            <div className="container">
              <div className="card topic-card">
                <div className="card-content">
                  <h2
                    className="headline headline-2 section-title card-title"
                    id="topic-label"
                  >
                    Some Winners
                  </h2>

                  <p className="card-text">
                    أعلى 5 مراكز فى كل مسابقه للاعوام ال 5 السابقه من 2022 إلى
                    2018
                  </p>

                  <div className="btn-group">
                    <button
                      className="btn-icon"
                      aria-label="previous"
                      data-slider-prev
                    >
                      <ion-icon name="arrow-back" aria-hidden="true"></ion-icon>
                    </button>

                    <button
                      className="btn-icon"
                      aria-label="next"
                      data-slider-next
                    >
                      <ion-icon
                        name="arrow-forward"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </div>
                </div>

                <div className="slider" data-slider>
                  <ul className="slider-list" data-slider-container>
                    {arr2022.map((item) => (
                      <li className="slider-item" key={item.id}>
                        <a href={item.social} className="slider-card">
                          <figure
                            className="slider-banner img-holder"
                            style={{ "--width": "507px", "--height": "618px" }}
                          >
                            <img
                              src={item.image || "/images/blank-photo.png"}
                              width="507"
                              height="618"
                              loading="lazy"
                              alt={item.name}
                              className="img-cover"
                              onError={(e) => replaceWithErrorImage(e)}
                            />
                          </figure>

                          <div className="slider-content">
                            <span className="slider-title">{item.name}</span>

                            <p className="slider-subtitle">
                              {item.rank} <br />
                              {item.competition} <br />
                              {item.date}
                            </p>
                          </div>
                        </a>
                      </li>
                    ))}

                    {arr2021.map((item) => (
                      <li className="slider-item" key={item.id}>
                        <a href={item.social} className="slider-card">
                          <figure
                            className="slider-banner img-holder"
                            style={{ "--width": "507px", "--height": "618px" }}
                          >
                            <img
                              src={item.image || "/images/blank-photo.png"}
                              width="507"
                              height="618"
                              loading="lazy"
                              alt={item.name}
                              className="img-cover"
                              onError={(e) => replaceWithErrorImage(e)}
                            />
                          </figure>

                          <div className="slider-content">
                            <span className="slider-title">{item.name}</span>

                            <p className="slider-subtitle">
                              {item.rank} <br />
                              {item.competition} <br />
                              {item.date}
                            </p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 
      - #RECENT POSTS
    */}
          <section
            className="section feature"
            aria-label="Recent Posts"
            id="recent-post"
          >
            <div className="container">
              <h2 className="headline headline-2 section-title">
                <span className="span">Recent Posts</span>
              </h2>

              <p className="section-text">
                Recently featured and highly rated posts
              </p>

              <ul className="feature-list">
                <li>
                  <div className="card feature-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "1602px", "--height": "903px" }}
                    >
                      <img
                        src="/images/post-1.jpg"
                        width="1602"
                        height="903"
                        loading="lazy"
                        alt="2023 بدايه اسبوع الآلام لسنه"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-Year">
                          <a href="#23" className="span hover-2" id="23">
                            #23
                          </a>
                        </div>

                        <div className="wrapper">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">1 min rear</span>
                        </div>
                      </div>

                      <h3 className="headline headline-3">
                        <a
                          href="https://www.facebook.com/photo.php?fbid=756191039341787&set=a.100794241548140&type=3"
                          className="card-title hover-2"
                          style={{
                            fontFamily: "var(--fontFamily-noto_sans_arabic)",
                          }}
                        >
                          بدايه اسبوع الآلام لسنه 2023
                        </a>
                      </h3>

                      <div className="card-wrapper">
                        <div className="profile-card">
                          <img
                            src="/images/author-1.jpg"
                            width="48"
                            height="48"
                            loading="lazy"
                            alt="St.George"
                            className="profile-banner"
                          />

                          <div>
                            <p className="card-title">St.George Port Said</p>

                            <p className="card-subtitle">10 Apr 2023</p>
                          </div>
                        </div>

                        <a
                          href="https://www.facebook.com/photo.php?fbid=756191039341787&set=a.100794241548140&type=3"
                          className="card-btn"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Repeat the above card structure for other recent posts */}
              </ul>

              <a
                href="https://www.facebook.com/saint.george.portsaid"
                className="btn btn-secondary"
              >
                <span className="span">Show More Posts</span>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
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

          {/* 
      - #POPULAR Years
    */}
          <section className="Years" aria-labelledby="Year-label" id="years">
            <div className="container">
              <h2 className="headline headline-2 section-title" id="Year-label">
                <span className="span">Years</span>
              </h2>

              <p className="section-text">Choose where you want to go Sir...</p>

              <ul className="grid-list">
                <li>
                  <a href="/year/2023" className="card Year-btn">
                    <p className="btn-text">2023</p>
                  </a>
                </li>

                {/* Repeat the above Year-btn structure for other years */}
              </ul>
            </div>
          </section>

          {/* 
      - OUR FATHERS
     */}
          <section
            className="section post post-phone"
            aria-label="post"
            id="recent-post"
          >
            <div className="container">
              <h2 className="headline headline-2 section-title">
                <span className="span">Our Fathers</span>
              </h2>

              <p className="section-text">All our fathers in our church</p>

              <ul className="post-list">
                {arrFathers.map((itemFather) => (
                  <li key={itemFather.id}>
                    <div className="card post-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ "--width": "600px", "--height": "600px" }}
                      >
                        <img
                          src={itemFather.image || "/images/blank-photo.png"}
                          width="600"
                          height="600"
                          loading="lazy"
                          alt={itemFather.name}
                          className="img-cover"
                          onError={(e) => replaceWithErrorImage(e)}
                        />
                      </figure>

                      <div className="card-content">
                        <div className="card-wrapper"></div>

                        <h3 className="headline headline-3">
                          <a
                            href={itemFather.social}
                            className="card-title hover-2"
                            style={{
                              fontFamily: "var(--fontFamily-noto_sans_arabic)",
                            }}
                          >
                            {itemFather.name}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <img
              src="/images/shadow-3.svg"
              width="500"
              height="1500"
              loading="lazy"
              alt=""
              className="post-bg"
            />
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}

export default Home;