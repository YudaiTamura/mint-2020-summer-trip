import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SEO from '../components/seo';
import Schedules from '../components/Schedules';
import Layout from '../components/layout';

import {
  KeyVisualContainer,
  KeyVisual,
  ScheduleContainer,
  ScheduleTitle,
  Day1Button,
  Day2Button,
  Day3Button,
  ScheduleEvents,
  ScheduleEvent,
  StyledLink,
  EventTime,
  EventTitle,
  AccommodationContainer,
  AccommodationInfo,
  AccommodationTitle,
  AccommodationPostalCode,
  AccommodationAddress,
  GoogleMapLink,
} from '../components/Index/style';

const Index = ({ data }) => {
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

  const [selectedDay, setSelectedDay] = useState('day1');
  const [schedule, setSchedule] = useState(Schedules.day1Schedule);
  const showDay1Schedule = () => {
    setSelectedDay('day1');
    setSchedule(Schedules.day1Schedule);
  };
  const showDay2Schedule = () => {
    setSelectedDay('day2');
    setSchedule(Schedules.day2Schedule);
  };
  const showDay3Schedule = () => {
    setSelectedDay('day3');
    setSchedule(Schedules.day3Schedule);
  };

  return (
    <Layout>
      <SEO />
      <KeyVisualContainer>
        <Slider {...slickSetting}>
          <KeyVisual fluid={data.himejijo.childImageSharp.fluid} alt="姫路城" />
          <KeyVisual fluid={data.arima.childImageSharp.fluid} alt="有馬温泉" />
          <KeyVisual fluid={data.merikenpark.childImageSharp.fluid} alt="メリケンパーク" />
        </Slider>
      </KeyVisualContainer>
      <ScheduleContainer>
        <ScheduleTitle>日程</ScheduleTitle>
        <Day1Button onClick={showDay1Schedule} aria-selected={selectedDay === 'day1'}>
          １日目
        </Day1Button>
        <Day2Button onClick={showDay2Schedule} aria-selected={selectedDay === 'day2'}>
          ２日目
        </Day2Button>
        <Day3Button onClick={showDay3Schedule} aria-selected={selectedDay === 'day3'}>
          ３日目
        </Day3Button>
        <ScheduleEvents>
          {schedule.map((event, index) => (
            <ScheduleEvent key={index}>
              <StyledLink to={event.link}>
                <EventTime>{event.time}</EventTime>
                <EventTitle>{event.name}</EventTitle>
              </StyledLink>
            </ScheduleEvent>
          ))}
        </ScheduleEvents>
      </ScheduleContainer>
      <AccommodationContainer>
        <AccommodationInfo>
          <AccommodationTitle>宿泊先</AccommodationTitle>
          <AccommodationPostalCode>〒650-0011</AccommodationPostalCode>
          <AccommodationAddress>兵庫県神戸市中央区下山手通１丁目２−１</AccommodationAddress>
          <GoogleMapLink href="https://goo.gl/maps/L3D7WZE3oWXK4Rui9" target="_blank">
            Google Mapsで開く
          </GoogleMapLink>
        </AccommodationInfo>
      </AccommodationContainer>
    </Layout>
  );
};

export const query = graphql`
  query IndexImage {
    himejijo: file(relativePath: { eq: "himejijo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    arima: file(relativePath: { eq: "arima.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    merikenpark: file(relativePath: { eq: "merikenpark.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Index;
