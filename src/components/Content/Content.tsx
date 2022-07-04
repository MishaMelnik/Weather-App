import React from 'react';
// PACKAGE
import styled from 'styled-components';
// COMPONENTS
import WeekItem from './WeekItem/WeekItem';
import TodayHighlights from './TodayHighlights/TodayHighlights';
// THEME
import { size } from '../../styles/theme/sizes';
import { lightTheme } from '../../styles/theme/colorsLight';
import { boxShadow } from '../../styles/theme/boxShadow';
// IMG
import icon from '../../img/WeekImg/day.svg';
import icon2 from '../../img/WeekImg/rainy-1.svg';
import icon3 from '../../img/WeekImg/rainy-2.svg';
import icon4 from '../../img/WeekImg/rainy-3.svg';
import icon5 from '../../img/WeekImg/rainy-4.svg';
import icon6 from '../../img/WeekImg/rainy-5.svg';
import icon7 from '../../img/WeekImg/rainy-6.svg';

const ContentContainer = styled.div`
  margin: 32px 40px 35px 38px;
`;
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
const ContentRouter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 143px;
  @media (max-width: ${size.tablet}) {
    width: 100px;
  }
`;
const ContentPages = styled.span`
  cursor: pointer;
  transition: all 0.25s ease;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  @media (max-width: ${size.tablet}) {
    font-size: 16px;
  }
  &:hover {
    color: ${lightTheme.generalLightGrayBackgroundColor};
    transition: 0.3s;
    cursor: pointer;
    transform: translateY(-5px);
  }
  &:active {
    color: ${lightTheme.generalBlackBackgroundColor};
  }
`;
const ContentButtons = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${size.tablet}) {
    width: 70px;
  }
`;
const ContentUnit = styled.button`
  border: none;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  background-color: ${lightTheme.generalWhiteBackgroundColor};
  transition: all 0.25s ease;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  padding: 8px 10px;
  box-shadow: ${boxShadow.contentButtonsBoxShadow};
  @media (max-width: ${size.tablet}) {
    font-size: 16px;
    padding: 2px 5px;
  }
  &:hover {
    color: ${lightTheme.contentButtonsColorHover};
    background-color: ${lightTheme.generalLightGrayBackgroundColor};
    transition: 0.3s;
    cursor: pointer;
    transform: translateY(-5px);
  }
  &:active {
    background-color: ${lightTheme.generalBlackBackgroundColor};
  }
`;
const ContentWeek = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 38px;
`;
const ContentBodyHeader = styled.div`
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
    <div>
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
        <ContentBodyHeader>Today’s Highlights</ContentBodyHeader>
        <TodayHighlights />
      </ContentContainer>
    </div>
  );
};

export default Content;
