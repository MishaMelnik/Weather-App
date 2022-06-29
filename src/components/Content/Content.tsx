import React from 'react';
// COMPONENTS
import WeekItem from './WeekItem/WeekItem';
import TodayHighlights from './TodayHighlights/TodayHighlights';
// IMG
import icon from '../../img/WeekImg/day.svg';
import icon2 from '../../img/WeekImg/rainy-1.svg';
import icon3 from '../../img/WeekImg/rainy-2.svg';
import icon4 from '../../img/WeekImg/rainy-3.svg';
import icon5 from '../../img/WeekImg/rainy-4.svg';
import icon6 from '../../img/WeekImg/rainy-5.svg';
import icon7 from '../../img/WeekImg/rainy-6.svg';
// STYLES
import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 950px;
  height: 100%;
`;
const ContentContainer = styled.div`
  width: 872px;
  height: 563px;
  margin: 32px 40px 35px 38px;
`;
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 40px;
`;
const ContentRouter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 143px;
`;
const ContentPages = styled.span`
  cursor: pointer;
  transition: all 0.25s ease;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  &:hover {
    color: #b9b9b9;
    transition: 0.3s;
    cursor: pointer;
    transform: translateY(-5px);
  }
  &:active {
    color: black;
  }
`;
const ContentButtons = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ContentUnit = styled.button`
  background-color: white;
  border: none;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  transition: all 0.25s ease;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  &:hover {
    color: aliceblue;
    background-color: #b9b9b9;
    transition: 0.3s;
    cursor: pointer;
    transform: translateY(-5px);
  }
  &:active {
    color: white;
    background-color: black;
  }
`;
const ContentWeek = styled.ul`
  display: flex;
  padding: 0;
  gap: 52px;
`;
const ContentHeadering = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
`;

const week = [
  { day: 'Tue', min: 5, max: 8, img: icon },
  { day: 'Wen', min: 2, max: 6, img: icon2 },
  { day: 'Thu', min: 3, max: 8, img: icon3 },
  { day: 'Fri', min: 1, max: 7, img: icon4 },
  { day: 'Sat', min: 5, max: 8, img: icon5 },
  { day: 'Sun', min: 2, max: 8, img: icon6 },
  { day: 'Mon', min: 5, max: 8, img: icon7 },
];

const Content = () => {
  return (
    <ContentWrapper>
      <ContentContainer>
        <ContentHeader>
          <ContentRouter>
            <ContentPages>Today</ContentPages>
            <ContentPages>Weeks</ContentPages>
          </ContentRouter>
          <ContentButtons>
            <ContentUnit>°C</ContentUnit>
            <ContentUnit>°F</ContentUnit>
          </ContentButtons>
        </ContentHeader>
        <ContentWeek>
          {week.map((day) => (
            <WeekItem key={Math.random()} days={day} />
          ))}
        </ContentWeek>
        <ContentHeadering>Today’s Highlights</ContentHeadering>
        <TodayHighlights />
      </ContentContainer>
    </ContentWrapper>
  );
};

export default Content;
