import React from 'react';
// PACKAGE
import styled from 'styled-components';
// THEME
import { size } from '../../../styles/theme/sizes';
import { lightTheme } from '../../../styles/theme/colorsLight';
import { boxShadow } from '../../../styles/theme/boxShadow';
// COMPONENTS
import Map from './Map/Map';
// IMG
import sunrise from '../../../img/HighlightsImg/up.svg';
import sunset from '../../../img/HighlightsImg/down.svg';
import max from '../../../img/HighlightsImg/thermometer1.svg';
import min from '../../../img/HighlightsImg/thermometer2.svg';

const HighlightsContainer = styled.div`
  display: grid;
  grid-template-areas: 's m';
  @media (max-width: ${size.laptopL}) {
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
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${size.laptopS}) {
    margin-top: 20px;
    gap: 20px 10px;
  }
`;
const HighlightsItem = styled.div`
  width: 30%;
  height: 140px;
  padding-bottom: 10px;
  background-color: ${lightTheme.generalWhiteBackgroundColor};
  box-shadow: ${boxShadow.highlightsItemBoxShadow};
  border-radius: 12px;
  @media (max-width: ${size.tabletL}) {
    width: 47%;
  }
`;
const HighlightsBox = styled.div`
  margin: 12px;
`;
const HighlightsHeader = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${lightTheme.generalLightGrayBackgroundColor};
`;
const HighlightsSpeed = styled.div`
  margin-top: 24px;
  margin-bottom: 18px;
  @media (max-width: ${size.tablet}) {
    margin-top: 19px;
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
const HighlightsFooter = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
const HighlightsDayLength = styled.div`
  margin-top: 13px;
  width: 60%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HighlightsIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;
const HighlightsTime = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;
const HighlightsMap = styled.div`
  @media (min-width: ${size.laptopS}) {
    margin-left: 20px;
  }
  grid-area: m;
`;
const HighlightsDifferenceTemperature = styled.div`
  margin-top: 6px;
  width: 70px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HighlightsThermometerIcon = styled.img`
  padding: 6px 0 0 10px;
  width: 10px;
  height: 28px;
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

const information = {
  numb1: 2,
  numb2: 10,
  time1: '07:02',
  time2: '16:20',
  unit: '°C',
  temp1: 7,
  temp2: 9,
};

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
                <HighlightsNumber>{`${information.numb1}`}</HighlightsNumber>
                <HighlightsKm>km/h</HighlightsKm>
              </HighlightsSpeed>
              <HighlightsFooter>Light breeze</HighlightsFooter>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>Sunrise & Sunset</HighlightsHeader>
              <HighlightsDayLength>
                <HighlightsIcon src={sunrise} alt="sunrise" />
                <HighlightsTime>{`${information.time1}`}</HighlightsTime>
              </HighlightsDayLength>
              <HighlightsDayLength>
                <HighlightsIcon src={sunset} alt="sunset" />
                <HighlightsTime>{`${information.time2}`}</HighlightsTime>
              </HighlightsDayLength>
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
                <HighlightsNumber>{`${information.numb2}`}</HighlightsNumber>
                <HighlightsKm>km/h</HighlightsKm>
              </HighlightsSpeed>
              <HighlightsFooter>Good visibility</HighlightsFooter>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>Min&Max temperature</HighlightsHeader>
              <HighlightsDifferenceTemperature>
                <HighlightsThermometerIcon src={min} alt="sunrise" />
                <HighlightsTemperature>{`${information.temp1}°`}</HighlightsTemperature>
              </HighlightsDifferenceTemperature>
              <HighlightsDifferenceTemperature>
                <HighlightsThermometerIcon src={max} alt="sunset" />
                <HighlightsTemperature>{`${information.temp2}°`}</HighlightsTemperature>
              </HighlightsDifferenceTemperature>
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
