import React, { useState, useRef, useEffect } from "react";
import "./splashheader.css";
import { useSelector, useDispatch } from "react-redux";
// import { openLogin, closeLogin } from "../../store/modal";
import Modal from "react-modal";
import LoginForm from "../LoginFormModal/LoginForm";
import img1 from "./undersplash.png"
import img2 from "./splash-1.jpg"

const SliderData = [
  {
    image: img1,
  },
  {
    image: img2,
  },
];

export function SplashHeader() {
  const image1 = useRef();
  const image2 = useRef();
  const slidebtn1 = useRef();
  const slidebtn2 = useRef();

  // const dispatch = useDispatch();
  // const loginState = useSelector((state) => state.modal.loginShow);
  // const closeModal = () => dispatch(closeLogin());

  const [slider, setSlider] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      image1.current.classList.add("slide-add");
      image2.current.classList.add("slide-add");
      setTimeout(() => {
        image1.current.classList.remove("slide-add");
        image2.current.classList.remove("slide-add");
        const sliderCopy = slider.slice();
        const slideImg = sliderCopy.shift();
        sliderCopy.push(slideImg);
        setSlider(sliderCopy);
      }, 1000);
    }, 4000);

    return () => clearInterval(timer);
  });

  const slideChange = () => {
    image1.current.classList.add("slide-add");
    image2.current.classList.add("slide-add");
    setTimeout(() => {
      image1.current.classList.remove("slide-add");
      image2.current.classList.remove("slide-add");
      const sliderCopy = slider.slice();
      const slideImg = sliderCopy.shift();
      sliderCopy.push(slideImg);
      setSlider(sliderCopy);
    }, 1000);
  };

  useEffect(() => {
    const imgs = [
      <span key={0} ref={image1}>
        <img
          className="slider-img"
          src={SliderData[0].image}
          alt="undertale_splashart"
        />
        <span>
          <span class="slider_title" id="slider_title_1">Discover more with 8BITCLOUD</span>
          <p className="slider_text" id="slider_text_1">
            8BITCloud lets you listen anytime, ad-free, with over 150
            tracks — and growing.
          </p>
          <span className = "slider_btn" >
            <a
              href="https://www.linkedin.com/in/matilda-zhang-328ba8186/"
              id="slider1_btn"
            >
              Meet The Dev
            </a>
            <>
              {/* <button id="slider1btn2" onClick={() => dispatch(openLogin())}>
                Try It Free Here
              </button> */}
              {/* <Modal
                isOpen={loginState}
                closeTimeoutMS={500}
                onRequestClose={closeModal}
                contentLabel="Login Modal"
                overlayClassName="OuterModal"
                className="InnerModal"
              >
                <LoginForm />
              </Modal> */}
            </>
          </span>
        </span>
      </span>,
      <span ref={image2} key={1}>
        <img
          className="slider-img"
          src={SliderData[1].image}
          alt="zelda_splashart"
        />
        <span className="slider2container">
          <span class= "slider_title" id="slider_title_2">
            What's next in gaming is first on 8BITCLOUD
          </span>
          <p className="slider_text" id="slider_text_2">
            Upload your first track and begin your journey. 8BitCloud gives you
            space to create, find your fans, and connect with other video game artists.
          </p>
        </span>
      </span>,
    ];
    setSlider(imgs);
  }, []);

  return (
    <div className="splash-slider-container">
      <div className="slide">{slider}</div>
      <div className="slidebtns">
        <button
          ref={slidebtn1}
          className="slide_btn1"
          onClick={slideChange}
        ></button>
        <button
          ref={slidebtn2}
          className="slide_btn2"
          onClick={slideChange}
        ></button>
      </div>
    </div>
  );
}
