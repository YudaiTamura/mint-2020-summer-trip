import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SEO from '../components/seo';
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

  let day1Schedule = [];
  let day2Schedule = [];
  let day3Schedule = [];
  data.allContentfulSchedule.edges.map(({ node }) => {
    let date = new Date(node.datetime);
    switch (date.getDate()) {
      case 8:
        day1Schedule.push({
          time: node.datetimeStd,
          title: node.title,
          link: node.slug,
        });
        break;
      case 9:
        day2Schedule.push({
          time: node.datetimeStd,
          title: node.title,
          link: node.slug,
        });
        break;
      case 10:
        day3Schedule.push({
          time: node.datetimeStd,
          title: node.title,
          link: node.slug,
        });
        break;
    }
  });

  const [selectedDay, setSelectedDay] = useState('day1');
  const [schedule, setSchedule] = useState(day1Schedule);
  const showDay1Schedule = () => {
    setSelectedDay('day1');
    setSchedule(day1Schedule);
  };
  const showDay2Schedule = () => {
    setSelectedDay('day2');
    setSchedule(day2Schedule);
  };
  const showDay3Schedule = () => {
    setSelectedDay('day3');
    setSchedule(day3Schedule);
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
              <StyledLink to={`/schedule/${event.link}`}>
                <EventTime>{event.time}</EventTime>
                <EventTitle>{event.title}</EventTitle>
              </StyledLink>
            </ScheduleEvent>
          ))}
        </ScheduleEvents>
      </ScheduleContainer>
      <AccommodationContainer>
        <AccommodationInfo>
          <AccommodationTitle>宿泊先</AccommodationTitle>
          <AccommodationPostalCode>〒651-0093</AccommodationPostalCode>
          <AccommodationAddress>兵庫県神戸市中央区二宮町2-3-5</AccommodationAddress>
          <GoogleMapLink href="https://goo.gl/maps/V2hRX8VFAfaQ3D3a6" target="_blank">
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
    allContentfulSchedule(sort: { order: ASC, fields: datetime }) {
      edges {
        node {
          title
          id
          slug
          datetime
          datetimeStd: datetime(formatString: "HH:mm")
        }
      }
    }
  }
`;

export default Index;
