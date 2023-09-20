// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./../assets/css/Login.css";
import logo from "../assets/logo.png";
import Header from "./../components/Header.jsx";
import Footer from './../components/Footer.jsx';

function Login() {
  document.title = "All Youssef Travel || Log in or add new student";
  const [inputsActive, setInputsActive] = useState({});
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [currentSliderIndex, setCurrentSliderIndex] = useState(1);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [fathersPhone, setFathersPhone] = useState("");

  const location = useLocation();
  const isSignUpRequested = location.search.includes("register");

  useEffect(() => {
    setIsSignUpMode(isSignUpRequested);
  }, [isSignUpRequested]);

  const handleInputChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "schoolName") {
      setSchoolName(e.target.value);
    } else if (e.target.name === "schoolAddress") {
      setSchoolAddress(e.target.value);
    } else if (e.target.name === "studentPhone") {
      setStudentPhone(e.target.value);
    } else if (e.target.name === "fathersPhone") {
      setFathersPhone(e.target.value);
    }
  };

  const handlePostRequest = () => {
    fetch("http://localhost:8001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        schoolName,
        schoolAddress,
        studentPhone,
        fathersPhone,
      }),
    })
      .then(() => (window.location = "/"))
      .then((data) => {
        // Handle the response data as needed
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const toggleMode = () => {
    setIsSignUpMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const inputFields = document.querySelectorAll(".input-field");
    const toggleBtns = document.querySelectorAll(".toggle");
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");

    inputFields.forEach((inp) => {
      inp.addEventListener("focus", () => {
        setInputsActive((prevState) => ({
          ...prevState,
          [inp.name]: true,
        }));

        // Scroll to the last input field when it gains focus
        if (inp.name === "fathersPhone") {
          const scrollableContainer = document.querySelector(
            ".scrollable-container"
          );
          scrollableContainer.scrollTop = scrollableContainer.scrollHeight;
        }
      });
      inp.addEventListener("blur", () => {
        if (inp.value !== "") return;
        setInputsActive((prevState) => ({
          ...prevState,
          [inp.name]: false,
        }));
      });
    });

    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        setIsSignUpMode((prevMode) => !prevMode);
      });
    });

    function moveSlider() {
      const index = parseInt(this.dataset.value, 10);

      images.forEach((img) => img.classList.remove("show"));
      images[index - 1].classList.add("show");

      const textSlider = document.querySelector(".text-group");
      textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

      bullets.forEach((bull) => bull.classList.remove("active"));
      this.classList.add("active");
      setCurrentSliderIndex(index);
    }

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", moveSlider);
    });
  }, []);

  return (
    <>
      <Header />
      <main className={isSignUpMode ? "sign-up-mode" : ""}>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              <form action="/" autoComplete="off" className="sign-in-form">
                <div className="logo">
                  <img src={logo} alt="Al Youssef Travel" />
                  <h4>Al Youssef Travel</h4>
                </div>

                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>Not registered yet? </h6>
                  <a href="#" className="toggle" onClick={toggleMode}>
                    Sign up
                  </a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength="4"
                      className={`input-field ${
                        inputsActive.name ? "active" : ""
                      }`}
                      autoComplete="off"
                      required
                      name="name"
                    />
                    <label>Name</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minLength="8"
                      className={`input-field ${
                        inputsActive.password ? "active" : ""
                      }`}
                      autoComplete="off"
                      required
                      name="password"
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value="Sign In" className="sign-btn" />

                  <p className="text">
                    Forgotten your password or your login details?
                    <a href="#">Get help</a> signing in
                  </p>
                </div>
              </form>

              <form action="/" autoComplete="off" className="sign-up-form">
                <div className="logo">
                  <img src={logo} alt="Al Youssef Travel" />
                  <h4>Al Youssef Travel</h4>
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account? </h6>
                  <a href="#" className="toggle" onClick={toggleMode}>
                    Sign in
                  </a>
                </div>

                <div className="actual-form">
                  {/* Wrap the input fields in a scrollable container */}
                  <div className="scrollable-container">
                    <div className="input-wrap">
                      <input
                        type="text"
                        minLength="4"
                        className={`input-field ${
                          inputsActive.name ? "active" : ""
                        }`}
                        autoComplete="off"
                        required
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                      />
                      <label>Name</label>
                    </div>

                    <div className="input-wrap">
                      <input
                        type="tel"
                        minLength="4"
                        className={`input-field ${
                          inputsActive.studentPhone ? "active" : ""
                        }`}
                        autoComplete="off"
                        required
                        name="studentPhone"
                        value={studentPhone}
                        onChange={handleInputChange}
                      />
                      <label>Student Phone Number</label>
                    </div>

                    <div className="input-wrap">
                      <input
                        type="tel"
                        minLength="4"
                        className={`input-field ${
                          inputsActive.fathersPhone ? "active" : ""
                        }`}
                        autoComplete="off"
                        required
                        name="fathersPhone"
                        value={fathersPhone}
                        onChange={handleInputChange}
                      />
                      <label>Fathers Phone Number</label>
                    </div>

                    <div className="input-wrap">
                      <input
                        type="text"
                        minLength="4"
                        className={`input-field ${
                          inputsActive.schoolName ? "active" : ""
                        }`}
                        autoComplete="off"
                        required
                        name="schoolName"
                        value={schoolName}
                        onChange={handleInputChange}
                      />
                      <label>School Name</label>
                    </div>

                    <div className="input-wrap">
                      <input
                        type="text"
                        minLength="4"
                        className={`input-field ${
                          inputsActive.schoolAddress ? "active" : ""
                        }`}
                        autoComplete="off"
                        required
                        name="schoolAddress"
                        value={schoolAddress}
                        onChange={handleInputChange}
                      />
                      <label>School Address</label>
                    </div>

                    <div className="input-wrap">
                      <input
                        type="email"
                        className={`input-field ${
                          inputsActive.email ? "active" : ""
                        }`}
                        autoComplete="off"
                        required
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                      />
                      <label>Email</label>
                    </div>

                    <div className="input-wrap">
                      <input
                        type="password"
                        minLength="4"
                        className={`input-field ${
                          inputsActive.password ? "active" : ""
                        }`}
                        autoComplete="off"
                        required
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                      />
                      <label>Password</label>
                    </div>
                  </div>
                  {/* End of scrollable container */}

                  <button
                    type="submit"
                    value="Sign Up"
                    className="sign-btn"
                    onClick={handlePostRequest}
                  >
                    Sign Up
                  </button>

                  <p className="text">
                    By signing up, I agree to the
                    <a href="#">Terms of Services</a> and
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </form>
            </div>

            <div className="carousel">
              <div className="images-wrapper">
                <img
                  src="/img/image1.png"
                  className={`image img-1 ${
                    currentSliderIndex === 1 ? "show" : ""
                  }`}
                  alt=""
                />
                <img
                  src="/img/image2.png"
                  className={`image img-2 ${
                    currentSliderIndex === 2 ? "show" : ""
                  }`}
                  alt=""
                />
                <img
                  src="/img/image3.png"
                  className={`image img-3 ${
                    currentSliderIndex === 3 ? "show" : ""
                  }`}
                  alt=""
                />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div className="text-group">
                    <h2>Add your child</h2>
                    <h2>the bus will take him to school</h2>
                    <h2>High-quality buses</h2>
                  </div>
                </div>

                <div className="bullets">
                  <span
                    className={`active ${
                      currentSliderIndex === 1 ? "active" : ""
                    }`}
                    data-value="1"
                  ></span>
                  <span
                    className={`${currentSliderIndex === 2 ? "active" : ""}`}
                    data-value="2"
                  ></span>
                  <span
                    className={`${currentSliderIndex === 3 ? "active" : ""}`}
                    data-value="3"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
