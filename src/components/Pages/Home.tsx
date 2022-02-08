import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface HomeProps {
  startValue: number;
  changeStartValue(value: number): void;
}

const Home: React.FC<HomeProps> = ({ startValue, changeStartValue }) => {
  const homeContent = useRef<any>(null);
  let secondCounter: number = startValue;

  useEffect(() => {
    setTimeout(() => {
      homeContent.current.className = "home__content home__content_vis";
    }, 5000);

    const countSeconds = setInterval(() => {
      secondCounter++;
    }, 1000);

    return () => {
      clearInterval(countSeconds);
      changeStartValue(secondCounter);
    };
  }, []);

  return (
    <div className="home">
      <iframe
        src={`https://www.youtube.com/embed/M7FIvfx5J10?autoplay=1&mute=1&controls=0&loop=1&disablekb=1&modestbranding=0&playlist=M7FIvfx5J10&start=${secondCounter}`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="home__frame"
      />
      <div className="home__content home__content_unvis" ref={homeContent}>
        <Link to="/promo" className="home__link">
          <span>ОК</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
