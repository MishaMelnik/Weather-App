import React, { useContext, useEffect, useRef, useState } from 'react';
// CONTEXT
import { GlobalContext } from '../../context/GlobalState';
// PACKAGE
import styled from 'styled-components';
// FUNC
import { getWeather } from '../../functions/getWeather';
// THEME
import { size } from '../../styles/theme/sizes';
import { boxShadow } from '../../styles/theme/boxShadow';
import { lightTheme } from '../../styles/theme/colorsLight';
// IMG
import img from '../../img/BlockImg/img_1.svg';
import homeIcon from '../../img/BlockImg/home_icon.svg';
import searchIcon from '../../img/BlockImg/search_icon.svg';
import cloudsIcon from '../../img/BlockImg/cloud.svg';
import checkoutIcon from '../../img/BlockImg/checkout.svg';
import closeIcon from '../../img/BlockImg/close.svg';

const BlockWrapper = styled.div`
  cursor: default;
  max-width: 330px;
  height: 100%;
  padding: 0 25px 0;
  box-shadow: ${boxShadow.blockBoxShadow};
  @media (max-width: ${size.mobileL}) {
    max-width: 556px;
  }
`;
const BlockPanelSection = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BlockCloudSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 260px;
  margin-top: 35px;
`;
const BlockInformationSection = styled.div`
  @media (max-width: ${size.mobileL}) {
    display: flex;
    justify-content: space-between;
  }
`;
const BlockCloudsSection = styled.div`
  border-top: 1px solid #b9b9b9;
  @media (max-width: ${size.mobileL}) {
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
`;
const BlockSearchIcon = styled.img`
  margin: 0 5px 0 7px;
`;
const BlockCloseIcon = styled.img`
  margin: 0 5px 0 3px;
`;
const InvisibleBlockCloseIcon = styled.img`
  margin: 0 5px 0 3px;
  visibility: hidden;
`;
const BlockHomeIcon = styled.img`
  background-color: ${lightTheme.blockPanelBackgroundColor};
  transition: all 0.25s ease;
  border-radius: 20px;
  margin-left: 5px;
  padding: 7.5px;
  box-shadow: ${boxShadow.panelBoxShadow};
  &:hover {
    color: aliceblue;
    transition: 0.3s;
    cursor: pointer;
    transform: translateY(-5px);
  }
  &:active {
    background-color: ${lightTheme.generalLightGrayBackgroundColor};
  }
`;
const BlockSearchLine = styled.div`
  background-color: ${lightTheme.blockPanelBackgroundColor};
  border-radius: 20px;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${boxShadow.panelBoxShadow};
`;
const BlockInput = styled.input`
  outline: none;
  height: 30px;
  width: 75%;
  border: none;
  font-size: 12px;
  background-color: transparent;
`;
const BlockCloud = styled.img`
  width: 130px;
  height: 140px;
`;
const BlockInformation = styled.div`
  display: flex;
  align-items: center;
  height: 84px;
`;
const BlockLocation = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  margin-bottom: 15px;
`;
const BlockNumber = styled.span`
  font-size: 72px;
`;
const BlockUnit = styled.span`
  align-self: flex-start;
  font-size: 50px;
`;
const BlockDate = styled.div`
  padding-bottom: 16px;
  margin-top: 10px;
`;
const BlockDay = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-right: 6px;
`;
const BlockTime = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #b9b9b9;
`;
const BlockClouds = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;
const BlockCloudsIcon = styled.img`
  width: 32px;
  height: 19px;
  margin-right: 10px;
`;
const BlockCheckoutIcon = styled.img`
  margin-left: 4px;
  margin-right: 13px;
  width: 24px;
  height: 24px;
`;
const BlockCloudsPercent = styled.span`
  margin-left: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
const information = {
  temp: 10,
  time: '13:17',
  percent: 75,
  unit: '°C',
  location: 'Kyiv, UA',
  day: 'Monday',
  type: 'Broken clouds',
};
const Block = () => {
  const [location, setLocation] = useState('');
  const { weather, setWeather } = useContext(GlobalContext);
  console.log(weather);
  const mainAddressField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!mainAddressField.current) {
      return;
    }

    const autoComplete = new window.google.maps.places.Autocomplete(mainAddressField.current, {
      componentRestrictions: { country: 'ua' },
      fields: ['address_components', 'geometry'],
    });
    autoComplete.addListener('place_changed', () => {
      const addressObject = autoComplete?.getPlace();
      const lat = addressObject.geometry?.location?.lat();
      const lng = addressObject.geometry?.location?.lng();
      getWeather(lat, lng, setWeather);
    });
  }, [mainAddressField]);
  return (
    <BlockWrapper>
      <BlockPanelSection>
        <BlockSearchLine>
          <BlockSearchIcon src={searchIcon} alt="search icon" />
          <BlockInput
            ref={mainAddressField}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="search for places..."
          />
          {location ? (
            <BlockCloseIcon onClick={() => setLocation('')} src={closeIcon} alt="close icon" />
          ) : (
            <InvisibleBlockCloseIcon src={closeIcon} alt="close icon" />
          )}
        </BlockSearchLine>
        <BlockHomeIcon src={homeIcon} alt="home icon" />
      </BlockPanelSection>
      <BlockCloudSection>
        <BlockCloud src={img} alt="logo" />
      </BlockCloudSection>
      <div>
        <BlockInformationSection>
          <BlockInformation>
            <BlockNumber>{`${information.temp}`}</BlockNumber>
            <BlockUnit>{`${information.unit}`}</BlockUnit>
          </BlockInformation>
          <BlockDate>
            <BlockLocation>{`${information.location}`}</BlockLocation>
            <BlockDay>{`${information.day}, `}</BlockDay>
            <BlockTime>{`${information.time}`}</BlockTime>
          </BlockDate>
        </BlockInformationSection>
        <BlockCloudsSection>
          <BlockClouds>
            <BlockCloudsIcon src={cloudsIcon} alt="clouds icon" />
            <BlockCloudsPercent>{`Clouds - ${information.percent}%`}</BlockCloudsPercent>
          </BlockClouds>
          <BlockClouds>
            <BlockCheckoutIcon src={checkoutIcon} alt="checkout icon" />
            <BlockCloudsPercent>{`${information.type}`}</BlockCloudsPercent>
          </BlockClouds>
        </BlockCloudsSection>
      </div>
    </BlockWrapper>
  );
};

export default Block;
