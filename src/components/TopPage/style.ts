import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Variables from '../Variables';

export const KeyVisualContainer = styled.div`
  width: 100vw;
  height: 100vh;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.2);
  }
`;

export const KeyVisual = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const ScheduleContainer = styled.div`
  background-color: ${Variables.COLOR.BIEGE};
  padding: 0 5%;
  display: grid;
  grid-template:
    '..... ..... .....' 4rem
    'title title title'
    '..... ..... .....' 1rem
    'day1  day2  day3 ' 4rem
    'body  body  body '
    '..... ..... .....' 4rem
    / 1fr 1fr 1fr;
`;

export const ScheduleTitle = styled.h2`
  grid-area: title;
  font-size: 2rem;
  font-family: serif;
  color: ${Variables.COLOR.DARK_BROWN};
`;

const ScheduleDayButton = styled.button`
  background-color: ${Variables.COLOR.BROWN};
  color: ${Variables.COLOR.WHITE};
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  font-family: serif;
  border-radius: 16px 16px 0 0;
  &[aria-selected='true'] {
    color: ${Variables.COLOR.BROWN};
    background-color: ${Variables.COLOR.BASE};
  }
`;

export const Day1Button = styled(ScheduleDayButton)`
  grid-area: day1;
`;

export const Day2Button = styled(ScheduleDayButton)`
  grid-area: day2;
`;

export const Day3Button = styled(ScheduleDayButton)`
  grid-area: day3;
`;

export const ScheduleEvents = styled.ul`
  grid-area: body;
  background-color: ${Variables.COLOR.BASE};
`;

export const ScheduleEvent = styled.li`
  width: 95%;
  margin: 1rem auto;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${Variables.COLOR.BROWN};
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  color: ${Variables.COLOR.WHITE};
`;

export const EventTime = styled.time`
  width: 100%;
  height: 1.4rem;
  font-size: 0.8rem;
  display: block;
`;

export const EventTitle = styled.h3`
  width: 100%;
  height: 2rem;
  font-size: 1.4rem;
  font-family: serif;
`;
