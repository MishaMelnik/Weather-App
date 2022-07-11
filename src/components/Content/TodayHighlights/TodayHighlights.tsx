import React, { useContext } from 'react';
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
import { GlobalContext } from '../../../context/GlobalState';
import { HumidityBody, ScaleScore } from '../../../models/models';

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
const HighlightsMainScale = styled.div`
  margin-top: 15px;
  width: 100%;
  max-width: 250px;
`;
const HighlightsRoadScale = styled.div`
  width: 100%;
  height: 0;
  background-color: antiquewhite;
  padding-bottom: 50%;
  position: relative;
  border-top-left-radius: 100% 200%;
  border-top-right-radius: 100% 200%;
  overflow: hidden;
`;
const HighlightsScaleScore = styled('div')<ScaleScore>`
  position: absolute;
  left: 0;
  top: 100%;
  height: 100%;
  border: none;
  background-color: orange;
  transform-origin: center top;
  transition: transform 0.2s ease-out;
  transform: rotate(${(props) => props.rotates}turn);
  width: inherit;
`;
const HighlightsScaleCovet = styled.div`
  font-weight: bold;
  font-size: 20px;
  width: 75%;
  height: 150%;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20%;
  box-sizing: border-box;
`;
const HighlightsHumidity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  @media (max-width: ${size.tablet}) {
    margin-top: 19px;
    margin-bottom: 18px;
  }
`;
const HighlightsHumidityMeaning = styled.div`
  padding: 24px 0 18px 0;
  display: flex;
`;
const HighlightsHumidityScale = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 105px;
  width: 100%;
  max-width: 30px;
  border: 1px solid #c4c4c4;
  border-radius: 12px;
`;
const HighlightsHumidityBody = styled('div')<HumidityBody>`
  margin-bottom: 1px;
  height: ${(props) => props.width}px;
  width: 100%;
  background-color: blue;
  max-width: 24px;
  border: 1px solid #c4c4c4;
  border-radius: 12px;
`;
const HighlightsHumidityPercent = styled.span`
  font-weight: bold;
  font-size: 20px;
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
  background-color: white;
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
  max-width: 90px;
  width: 100%;
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

const TodayHighlights = () => {
  const { currentWeather, weatherWeek } = useContext(GlobalContext);
  return (
    <div>
      <HighlightsContainer>
        <HighlightsSections>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>UV Index</HighlightsHeader>
              <HighlightsMainScale>
                <HighlightsRoadScale>
                  <HighlightsScaleScore rotates={currentWeather[0].humidity / 200} />
                  <HighlightsScaleCovet>{`${currentWeather[0].humidity}%`}</HighlightsScaleCovet>
                </HighlightsRoadScale>
              </HighlightsMainScale>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>Wind Status</HighlightsHeader>
              <HighlightsSpeed>
                <HighlightsNumber>{`${currentWeather[0]?.windSpeed}`}</HighlightsNumber>
                <HighlightsKm>{`${currentWeather[0].mode == 'metric' ? 'km/h' : 'mph'}`}</HighlightsKm>
              </HighlightsSpeed>
              <HighlightsFooter>Light breeze</HighlightsFooter>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>Sunrise & Sunset</HighlightsHeader>
              <HighlightsDayLength>
                <HighlightsIcon src={sunrise} alt="sunrise" />
                <HighlightsTime>{`${currentWeather[0]?.sunrise}`}</HighlightsTime>
              </HighlightsDayLength>
              <HighlightsDayLength>
                <HighlightsIcon src={sunset} alt="sunset" />
                <HighlightsTime>{`${currentWeather[0]?.sunset}`}</HighlightsTime>
              </HighlightsDayLength>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHumidity>
                <div>
                  <HighlightsHeader>Humidity</HighlightsHeader>
                  <HighlightsHumidityMeaning>
                    <HighlightsNumber>{`${currentWeather[0]?.humidity}`}</HighlightsNumber>
                    <HighlightsHumidityPercent>%</HighlightsHumidityPercent>
                  </HighlightsHumidityMeaning>
                  <HighlightsFooter>Miserable</HighlightsFooter>
                </div>
                <HighlightsHumidityScale>
                  <HighlightsHumidityBody width={currentWeather[0].humidity} />
                </HighlightsHumidityScale>
              </HighlightsHumidity>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>Visibility</HighlightsHeader>
              <HighlightsSpeed>
                <HighlightsNumber>{`${currentWeather[0]?.visibility}`}</HighlightsNumber>
                <HighlightsKm>km/h</HighlightsKm>
              </HighlightsSpeed>
              <HighlightsFooter>Good visibility</HighlightsFooter>
            </HighlightsBox>
          </HighlightsItem>
          <HighlightsItem>
            <HighlightsBox>
              <HighlightsHeader>Min&Max temperature</HighlightsHeader>
              <HighlightsDifferenceTemperature>
                <HighlightsThermometerIcon src={min} alt="min" />
                <HighlightsTemperature>{`${weatherWeek[0]?.minTemp}°`}</HighlightsTemperature>
              </HighlightsDifferenceTemperature>
              <HighlightsDifferenceTemperature>
                <HighlightsThermometerIcon src={max} alt="max" />
                <HighlightsTemperature>{`${weatherWeek[0]?.maxTemp}°`}</HighlightsTemperature>
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
