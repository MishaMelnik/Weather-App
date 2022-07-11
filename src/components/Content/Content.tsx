import React, { useContext, useState } from 'react';
// PACKAGE
import styled from 'styled-components';
// COMPONENTS
import WeekItem from './WeekItem/WeekItem';
import TodayHighlights from './TodayHighlights/TodayHighlights';
// CONTEXT
import { GlobalContext } from '../../context/GlobalState';
// THEME
import { size } from '../../styles/theme/sizes';
import { lightTheme } from '../../styles/theme/colorsLight';
import { boxShadow } from '../../styles/theme/boxShadow';
import { getWeatherWeek } from '../../functions/getWeatherWeek';
import { getCurrentWeather } from '../../functions/getCurrentWeather';

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

const Content = () => {
  const { weatherWeek, currentWeather, setWeatherWeek, setCurrentWeather } = useContext(GlobalContext);
  const { lon, lat } = currentWeather[0];

  const handleCelsius = () => {
    getCurrentWeather(lat, lon, setCurrentWeather, 'metric');
    getWeatherWeek(lat, lon, setWeatherWeek, 'metric');
  };
  const handleFahrenheit = () => {
    getCurrentWeather(lat, lon, setCurrentWeather, 'imperial');
    getWeatherWeek(lat, lon, setWeatherWeek, 'imperial');
  };
  return (
    <div>
      <ContentContainer>
        <ContentHeader>
          <ContentRouter>
            <ContentPages>Today</ContentPages>
            <ContentPages>Weeks</ContentPages>
          </ContentRouter>
          <ContentButtons>
            <ContentUnit onClick={handleCelsius}>°C</ContentUnit>
            <ContentUnit onClick={handleFahrenheit}>°F</ContentUnit>
          </ContentButtons>
        </ContentHeader>
        <ContentWeek>
          {weatherWeek.map((day: any) => (
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
