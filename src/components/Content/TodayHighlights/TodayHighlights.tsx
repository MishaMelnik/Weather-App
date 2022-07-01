import React from 'react';
// IMG
import sunrise from '../../../img/HighlightsImg/up.svg';
import sunset from '../../../img/HighlightsImg/down.svg';
import max from '../../../img/HighlightsImg/thermometer1.svg';
import min from '../../../img/HighlightsImg/thermometer2.svg';
// STYLES
import styled from 'styled-components';
import Map from './Map/Map';

const HighlightsContainer = styled.div`
  display: grid;
  grid-template-areas: 's m';
  @media (max-width: 1024px) {
    grid-template-areas:
      'm'
      's';
  }
`;
const HighlightsSections = styled.div`
  grid-area: s;
  flex-wrap: wrap;
  gap: 20px 24px;
  display: flex;
  @media (max-width: 1024px) {
    padding: 20px 0 0 20px;
    gap: 20px 60px;
  }
  @media (max-width: 868px) {
    padding: 20px 0 0 0;
    gap: 20px 10px;
  }
`;
const HighlightsItem = styled.div`
  width: 176px;
  height: 140px;
  background-color: #ffffff;
  box-shadow: 0 0 14px -4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  @media (max-width: 770px) {
    width: 165px;
  }
  @media (max-width: 679px) {
    width: 115px;
    height: 142px;
  }
  @media (max-width: 526px) {
    width: 132px;
    height: 142px;
  }
`;
const HighlightsBox = styled.div`
  margin: 12px;
`;
const HighlightsHeader = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #b9b9b9;
`;
const HighlightsSpeed = styled.div`
  margin-top: 24px;
  margin-bottom: 18px;
  @media (max-width: 526px) {
    margin-top: 15px;
    margin-bottom: 18px;
  }
`;
const HighlightsNumber = styled.span`
  margin-right: 4px;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
`;
const HighlightsKm = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
const HighlightsWindType = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
const HighlightsSunrise = styled.div`
  margin-top: 10px;
  margin-bottom: 16px;
  width: 90px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 526px) {
    margin-top: 15px;
  }
`;
const HighlightsImg = styled.img`
  width: 32px;
  height: 31.93px;
`;
const HighlightsTime = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;
const HighlightsSunset = styled.div`
  width: 90px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HighlightsMin = styled.div`
  margin-bottom: 6px;
  width: 70px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 526px) {
    margin-bottom: 1px;
  }
`;
const HighlightsMap = styled.div`
  grid-area: m;
`;
const HighlightsTwoImg = styled.img`
  padding: 6px 0 0 10px;
  width: 10px;
  height: 28.57px;
  @media (max-width: 526px) {
    padding: 2px 0 0 10px;
    width: 10px;
    height: 25px;
  }
`;
const HighlightsTemperature = styled.span`
  padding: 0;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  @media (max-width: 526px) {
    font-size: 30px;
  }
`;
const HighlightsMax = styled.div`
  width: 70px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodayHighlights = () => {
  return (
    <div>
      <HighlightsContainer>
        <HighlightsSections>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>UV Index</HighlightsHeader>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>Wind Status</HighlightsHeader>
              <HighlightsSpeed>
                <HighlightsNumber>2</HighlightsNumber>
                <HighlightsKm>km/h</HighlightsKm>
              </HighlightsSpeed>
              <HighlightsWindType>Light breeze</HighlightsWindType>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>Sunrise & Sunset</HighlightsHeader>
              <HighlightsSunrise>
                <HighlightsImg src={sunrise} alt="sunrise" />
                <HighlightsTime>07:02</HighlightsTime>
              </HighlightsSunrise>
              <HighlightsSunset>
                <HighlightsImg src={sunset} alt="sunset" />
                <HighlightsTime>16:20</HighlightsTime>
              </HighlightsSunset>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>Humidity</HighlightsHeader>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>Visibility</HighlightsHeader>
              <HighlightsSpeed>
                <HighlightsNumber>10</HighlightsNumber>
                <HighlightsKm>km/h</HighlightsKm>
              </HighlightsSpeed>
              <HighlightsWindType>Good visibility</HighlightsWindType>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>Min&Max temperature</HighlightsHeader>
              <HighlightsMin>
                <HighlightsTwoImg src={min} alt="sunrise" />
                <HighlightsTemperature>7°</HighlightsTemperature>
              </HighlightsMin>
              <HighlightsMax>
                <HighlightsTwoImg src={max} alt="sunset" />
                <HighlightsTemperature>9°</HighlightsTemperature>
              </HighlightsMax>
            </HighlightsBox>
          </HighlightsItem>
        </HighlightsSections>
        <HighlightsMap>
          <Map />
        </HighlightsMap>
      </HighlightsContainer>
    </div>
  );
};

export default TodayHighlights;
