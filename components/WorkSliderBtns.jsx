"use client";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

function WorkSliderBtns({ containerStyle, btnStyle, iconsStyle }) {
  const swiper = useSwiper();

  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyle} />
      </button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  );
}

export default WorkSliderBtns;
