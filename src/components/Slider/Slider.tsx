import React, { useEffect, useRef } from "react";

import slider1 from "../../img/slider-1.png";
import slider2 from "../../img/slider-2.png";
import slider3 from "../../img/slider-3.png";

const Slider: React.FC = () => {
  const slider = useRef<any>(null);
  const sliderList = useRef<any>(null);
  const leftBtn = useRef<any>(null);
  const rightBtn = useRef<any>(null);

  const imgNextHandler = () => {
    const currentPosition = parseInt(
      getComputedStyle(sliderList.current).marginLeft
    );
    const slidWidth = parseInt(getComputedStyle(slider.current).width);
    const sliderCount = sliderList.current.children.length;
    const nextPosition = currentPosition - slidWidth;

    if (-nextPosition < sliderCount * slidWidth - 1) {
      sliderList.current.style.marginLeft = currentPosition - slidWidth + "px";

      leftBtn.current.className =
        "slider__btn slider__btn_left slider__btn_left-active";
    }

    if (-nextPosition * 2 >= slidWidth * sliderCount) {
      rightBtn.current.className = "slider__btn slider__btn_right";
    }
  };

  const imgPrevHandler = () => {
    const currentPosition = parseInt(
      getComputedStyle(sliderList.current).marginLeft
    );
    const slidWidth = parseInt(getComputedStyle(slider.current).width);
    const nextPosition = currentPosition + slidWidth;

    if (nextPosition <= 0) {
      sliderList.current.style.marginLeft = currentPosition + slidWidth + "px";
      rightBtn.current.className =
        "slider__btn slider__btn_right slider__btn_right-active";
    }

    if (nextPosition * 2 + slidWidth >= 0) {
      leftBtn.current.className = "slider__btn slider__btn_left";
    }
  };

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.code === "ArrowLeft") {
        imgPrevHandler();
      }
      if (e.code === "ArrowRight") {
        imgNextHandler();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => document.removeEventListener("keydown", keyDownHandler);
  }, []);

  return (
    <div className="slider" ref={slider}>
      <ul className="slider__list" ref={sliderList}>
        <li className="slider__li">
          <img src={slider1} className="slider__img" />
        </li>
        <li className="slider__li">
          <img src={slider2} className="slider__img" />
        </li>
        <li className="slider__li">
          <img src={slider3} className="slider__img" />
        </li>
      </ul>

      <div className="slider__btn-container">
        <button
          className="slider__btn slider__btn_left"
          onClick={imgPrevHandler}
          ref={leftBtn}
        ></button>
        <button
          className="slider__btn slider__btn_right slider__btn_right-active"
          onClick={imgNextHandler}
          ref={rightBtn}
        ></button>
      </div>
    </div>
  );
};

export default Slider;
