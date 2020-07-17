import React, { useState } from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import himejijoImg from "../../images/himejijo.jpg";
import arimaImg from "../../images/arima.jpg";
import merikenparkImg from "../../images/merikenpark.jpg";

import Schedules from "../Schedules";

import { KeyVisualContainer, KeyVisual, Links, StyledLink } from "./style";

const TopPage = () => {
  const slickSetting = {
    fade: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const keyVisualImgs = [himejijoImg, arimaImg, merikenparkImg];

  const [schedule, setSchedule] = useState(Schedules.day1Schedule);
  const showDay1Schedule = () => setSchedule(Schedules.day1Schedule);
  const showDay2Schedule = () => setSchedule(Schedules.day2Schedule);
  const showDay3Schedule = () => setSchedule(Schedules.day3Schedule);

  return (
    <section className="top-page">
      <KeyVisualContainer>
        <Slider {...slickSetting}>
          {keyVisualImgs.map((img, index) => (
            <LazyLoad height={200} key={index}>
              <KeyVisual src={img} />
            </LazyLoad>
          ))}
        </Slider>
      </KeyVisualContainer>
      <Links>
        <h2>日程</h2>
        <button onClick={showDay1Schedule}>１日目</button>
        <button onClick={showDay2Schedule}>２日目</button>
        <button onClick={showDay3Schedule}>３日目</button>
        <ul>
          {schedule.map((event: { time: string; name: string; link: string }, index: number) => (
            <li key={index}>
              <StyledLink to={event.link}>
                <time>{event.time}</time>
                <h3>{event.name}</h3>
              </StyledLink>
            </li>
          ))}
        </ul>
      </Links>
    </section>
  );
};

export default TopPage;
