// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer.jsx";

function Home() {
  document.title = "St.George | Home";

  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const [arrFathers, setArrFathers] = useState([]);
  const [arr2022, setArr2022] = useState([]);
  const [arr2021, setArr2021] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/arrFathers")
      .then((response) => response.json())
      .then((result) => {
        setArrFathers(result);
      })
      .catch((error) => {
        console.error("Error fetching Fathers Data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/arr2022")
      .then((response) => response.json())
      .then((result) => {
        // Update the arr2022 state with the fetched data
        setArr2022(result);
      })
      .catch((error) => {
        console.error("Error fetching 2022 Data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/arr2021")
      .then((response) => response.json())
      .then((result) => {
        // Update the arr2021 state with the fetched data
        setArr2021(result);
      })
      .catch((error) => {
        console.error("Error fetching 2021 Data:", error);
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
      <Header
        darkMode={darkMode}
        onDarkModeChange={handleDarkModeChange}
        adminName="Marco"
        isPersistentLoggedIn={true}
      />
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
                <div className="input-wrapper" />
              </div>
              <div className="church-banner">
                <img
                  src="/images/pattern-2.svg"
                  width={27}
                  height={26}
                  alt="shape"
                  className="shape shape-1"
                />
                <img
                  src="/images/pattern-3.svg"
                  width={27}
                  height={26}
                  alt="shape"
                  className="shape shape-2"
                />
              </div>
              <img
                src="/images/shadow-1.svg"
                width={500}
                height={800}
                alt=""
                className="church-bg church-bg-1"
              />
              <img
                src="/images/shadow-2.svg"
                width={500}
                height={500}
                alt=""
                className="church-bg church-bg-2"
              />
            </div>
          </section>
          {/* 
          - #winners
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
                      <ion-icon name="arrow-back" aria-hidden="true" />
                    </button>
                    <button
                      className="btn-icon"
                      aria-label="next"
                      data-slider-next
                    >
                      <ion-icon name="arrow-forward" aria-hidden="true" />
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
                            style={{ "-width": "507px", "-height": "618px" }}
                          >
                            <img
                              src={item.image || "/images/blank-photo.png"}
                              width="507"
                              height="618"
                              loading="lazy"
                              alt={item.name}
                              className="img-cover"
                              onError={(e) => replaceWithErrorImage(e.target)}
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
                            style={{ "-width": "507px", "-height": "618px" }}
                          >
                            <img
                              src={item.image || "/images/blank-photo.png"}
                              width="507"
                              height="618"
                              loading="lazy"
                              alt={item.name}
                              className="img-cover"
                              onError={(e) => replaceWithErrorImage(e.target)}
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
                      style={{ width: "1602", height: "903" }}
                    >
                      <img
                        src="/images/post-1.jpg"
                        width={1602}
                        height={903}
                        loading="lazy"
                        alt="2023 بدايه اسبوع الآلام لسنه"
                        className="img-cover"
                      />
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-Year">
                          <a href="#23" className="span hover-2" id={23}>
                            #23
                          </a>
                        </div>
                        <div className="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true" />
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
                            width={48}
                            height={48}
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
                <li>
                  <div className="card feature-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ width: 1602, height: 903 }}
                    >
                      <img
                        src="/images/featured-2.jpg"
                        width={1602}
                        height={903}
                        loading="lazy"
                        alt="ثالث يوم من بدايه اسبوع الآلام 2023"
                        className="img-cover"
                      />
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-Year">
                          <a href="#23" className="span hover-2" id={23}>
                            #23
                          </a>
                        </div>
                        <div className="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true" />
                          <span className="span">6 mins read</span>
                        </div>
                      </div>
                      <h3 className="headline headline-3">
                        <a
                          href="https://www.facebook.com/photo?fbid=616573820514181&set=pb.100064847042124.-2207520000."
                          className="card-title hover-2"
                          style={{
                            fontFamily: "var(--fontFamily-noto_sans_arabic)",
                          }}
                        >
                          ثالث يوم من بدايه اسبوع الآلام 2023
                        </a>
                      </h3>
                      <div className="card-wrapper">
                        <div className="profile-card">
                          <img
                            src="/images/author-1.jpg"
                            width={48}
                            height={48}
                            loading="lazy"
                            alt="St.George"
                            className="profile-banner"
                          />
                          <div>
                            <p className="card-title">st.George Port Said</p>
                            <p className="card-subtitle">13 Apr 2023</p>
                          </div>
                        </div>
                        <a
                          href="https://www.facebook.com/photo?fbid=616573820514181&set=pb.100064847042124.-2207520000."
                          className="card-btn"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card feature-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ width: 1602, height: 903 }}
                    >
                      <img
                        src="/images/featured-3.jpg"
                        width={1602}
                        height={903}
                        loading="lazy"
                        alt="حضور سيدنا لليوم الثالث من أيام أسبوع الآلام 2023"
                        className="img-cover"
                      />
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-Year">
                          <a href="#23" className="span hover-2">
                            #23
                          </a>
                        </div>
                        <div className="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true" />
                          <span className="span">6 mins read</span>
                        </div>
                      </div>
                      <h3 className="headline headline-3">
                        <a
                          href="https://www.facebook.com/saint.george.portsaid/posts/pfbid02ffTNU8UEJhhGhGWqdQEWwjbYpNHM4QxQpbadhWStUKjz591FBCFVEx2itbCdePdQl"
                          className="card-title hover-2"
                          style={{
                            fontFamily: "var(--fontFamily-noto_sans_arabic)",
                          }}
                        >
                          حضور سيدنا لليوم الثالث من أيام أسبوع الآلام
                        </a>
                      </h3>
                      <div className="card-wrapper">
                        <div className="profile-card">
                          <img
                            src="/images/author-1.jpg"
                            width={48}
                            height={48}
                            loading="lazy"
                            alt="St.George"
                            className="profile-banner"
                          />
                          <div>
                            <p className="card-title">St.George Port Said</p>
                            <p className="card-subtitle">13 Apr 2023</p>
                          </div>
                        </div>
                        <a
                          href="https://www.facebook.com/saint.george.portsaid/posts/pfbid02ffTNU8UEJhhGhGWqdQEWwjbYpNHM4QxQpbadhWStUKjz591FBCFVEx2itbCdePdQl"
                          className="card-btn"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card feature-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ width: 1602, height: 903 }}
                    >
                      <img
                        src="/images/featured-4.jpg"
                        width={1602}
                        height={903}
                        loading="lazy"
                        alt="افضل أيام السنه, يوم الجمعه العظيمه"
                        className="img-cover"
                      />
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-Year">
                          <a href="#" className="span hover-2">
                            #23
                          </a>
                        </div>
                        <div className="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true" />
                          <span className="span">6 mins read</span>
                        </div>
                      </div>
                      <h3 className="headline headline-3">
                        <a
                          href="https://www.facebook.com/photo.php?fbid=617119087126321&set=pb.100064847042124.-2207520000.&type=3"
                          className="card-title hover-2"
                          style={{
                            fontFamily: "var(--fontFamily-noto_sans_arabic)",
                          }}
                        >
                          افضل أيام السنه, يوم الجمعه العظيمه
                        </a>
                      </h3>
                      <div className="card-wrapper">
                        <div className="profile-card">
                          <img
                            src="/images/author-1.jpg"
                            width={48}
                            height={48}
                            loading="lazy"
                            alt="St.George"
                            className="profile-banner"
                          />
                          <div>
                            <p className="card-title">St.George Port Said</p>
                            <p className="card-subtitle">14 Apr 2023</p>
                          </div>
                        </div>
                        <a
                          href="https://www.facebook.com/photo.php?fbid=617119087126321&set=pb.100064847042124.-2207520000.&type=3"
                          className="card-btn"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="card feature-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ width: 1602, height: 903 }}
                    >
                      <img
                        src="/images/featured-5.jpg"
                        width={1602}
                        height={903}
                        loading="lazy"
                        alt="يوم الجمعه العظيمه لعام 2023"
                        className="img-cover"
                      />
                    </figure>
                    <div className="card-content">
                      <div className="card-wrapper">
                        <div className="card-Year">
                          <a href="#" className="span hover-2">
                            #23
                          </a>
                        </div>
                        <div className="wrapper">
                          <ion-icon name="time-outline" aria-hidden="true" />
                          <span className="span">6 mins read</span>
                        </div>
                      </div>
                      <h3 className="headline headline-3">
                        <a
                          href="https://www.facebook.com/photo.php?fbid=617119337126296&set=pb.100064847042124.-2207520000.&type=3"
                          className="card-title hover-2"
                          style={{
                            fontFamily: "var(--fontFamily-noto_sans_arabic)",
                          }}
                        >
                          يوم الجمعه العظيمه لعام 2023
                        </a>
                      </h3>
                      <div className="card-wrapper">
                        <div className="profile-card">
                          <img
                            src="/images/author-1.jpg"
                            width={48}
                            height={48}
                            loading="lazy"
                            alt="St.George"
                            className="profile-banner"
                          />
                          <div>
                            <p className="card-title">St.George Port Said</p>
                            <p className="card-subtitle">14 Apr 2023</p>
                          </div>
                        </div>
                        <a
                          href="https://www.facebook.com/photo.php?fbid=617119337126296&set=pb.100064847042124.-2207520000.&type=3"
                          className="card-btn"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <a
                href="https://www.facebook.com/saint.george.portsaid"
                className="btn btn-secondary"
              >
                <span className="span">Show More Posts</span>
                <ion-icon name="arrow-forward" aria-hidden="true" />
              </a>
            </div>
            <img
              src="/images/shadow-3.svg"
              width={500}
              height={1500}
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
                <li>
                  <a href="/year/2022" className="card Year-btn">
                    <p className="btn-text">2022</p>
                  </a>
                </li>
                <li>
                  <a href="/year/2021" className="card Year-btn">
                    <p className="btn-text">2021</p>
                  </a>
                </li>
                <li>
                  <a href="/year/2020" className="card Year-btn">
                    <p className="btn-text">2020</p>
                  </a>
                </li>
                <li>
                  <a href="/year/2019" className="card Year-btn">
                    <p className="btn-text">2019</p>
                  </a>
                </li>
                <li>
                  <a href="/year/2018" className="card Year-btn">
                    <p className="btn-text">2018</p>
                  </a>
                </li>
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
                          onError={(e) => replaceWithErrorImage(e.target)}
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
              width={500}
              height={1500}
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
