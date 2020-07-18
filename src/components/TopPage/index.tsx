import React, { useState } from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import himejijoImg from "../../images/himejijo.jpg";
import arimaImg from "../../images/arima.jpg";
import merikenparkImg from "../../images/merikenpark.jpg";

import Schedules from "../Schedules";

import { KeyVisualContainer, KeyVisual, ScheduleContainer, ScheduleTitle, Day1Button, Day2Button, Day3Button, ScheduleEvents, ScheduleEvent, StyledLink, EventTime, EventTitle } from "./style";

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

  const [selectedDay, setSelectedDay] = useState("day1");
  const [schedule, setSchedule] = useState(Schedules.day1Schedule);
  const showDay1Schedule = () => {
    setSelectedDay("day1");
    setSchedule(Schedules.day1Schedule);
  };
  const showDay2Schedule = () => {
    setSelectedDay("day2");
    setSchedule(Schedules.day2Schedule);
  };
  const showDay3Schedule = () => {
    setSelectedDay("day3");
    setSchedule(Schedules.day3Schedule);
  };

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
      <ScheduleContainer>
        <ScheduleTitle>日程</ScheduleTitle>
        <Day1Button onClick={showDay1Schedule} aria-selected={selectedDay === "day1"}>
          １日目
        </Day1Button>
        <Day2Button onClick={showDay2Schedule} aria-selected={selectedDay === "day2"}>
          ２日目
        </Day2Button>
        <Day3Button onClick={showDay3Schedule} aria-selected={selectedDay === "day3"}>
          ３日目
        </Day3Button>
        <ScheduleEvents>
          {schedule.map((event: { time: string; name: string; link: string }, index: number) => (
            <ScheduleEvent key={index}>
              <StyledLink to={event.link}>
                <EventTime>{event.time}</EventTime>
                <EventTitle>{event.name}</EventTitle>
              </StyledLink>
            </ScheduleEvent>
          ))}
        </ScheduleEvents>
      </ScheduleContainer>
    </section>
  );
};

export default TopPage;
