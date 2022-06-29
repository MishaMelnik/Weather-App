import React from 'react';
// IMG
import img from '../../img/BlockImg/img_1.svg';
import homeIcon from '../../img/BlockImg/home_icon.svg';
import searchIcon from '../../img/BlockImg/search_icon.svg';
import cloudsIcon from '../../img/BlockImg/cloud.svg';
import checkoutIcon from '../../img/BlockImg/checkout.svg';
// STYLES
import styled from 'styled-components';

const BlockWrapper = styled.div`
  cursor: default;
  width: 330px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 0 3.2px;
`;
const BlockPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 25px 0 25px;
  width: 280px;
`;
const BlockSearchIcon = styled.img`
  margin: 0 9.79px 0 7.8px;
`;
const BlockHomeIcon = styled.img`
  background-color: #f3f3f3;
  border-radius: 20px;
  padding: 7.5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
`;
const BlockSearchLine = styled.div`
  background-color: #f3f3f3;
  border-radius: 20px;
  width: 240px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
`;
const BlockInput = styled.input`
  outline: none;
  height: 30px;
  width: 75%;
  border: none;
  background-color: transparent;
`;
const BlockImg = styled.img`
  width: 212px;
  height: 185.41px;
  margin: 65px 60px 38.59px 60px;
`;
const BlockBox = styled.div`
  width: 280px;
  height: 241px;
  margin: 0 25px 0 25px;
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
  border-bottom: 1px solid #b9b9b9;
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
  margin-right: 14px;
  width: 24px;
  height: 24px;
`;
const BlockCloudsPercent = styled.span`
  margin-left: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const Block = () => {
  return (
    <BlockWrapper>
      <BlockPanel>
        <BlockSearchLine>
          <BlockSearchIcon src={searchIcon} alt="search icon" />
          <BlockInput placeholder="search for places..." />
        </BlockSearchLine>
        <BlockHomeIcon src={homeIcon} alt="home icon" />
      </BlockPanel>
      <BlockImg src={img} alt="logo" />
      <BlockBox>
        <BlockInformation>
          <BlockNumber>9</BlockNumber>
          <BlockUnit>°C</BlockUnit>
        </BlockInformation>
        <BlockLocation>Kyiv, UA</BlockLocation>
        <BlockDate>
          <BlockDay>Monday,</BlockDay>
          <BlockTime>13:17</BlockTime>
        </BlockDate>
        <BlockClouds>
          <BlockCloudsIcon src={cloudsIcon} alt="clouds icon" />
          <BlockCloudsPercent>Clouds - 75%</BlockCloudsPercent>
        </BlockClouds>
        <BlockClouds>
          <BlockCheckoutIcon src={checkoutIcon} alt="checkout icon" />
          <BlockCloudsPercent>Broken clouds</BlockCloudsPercent>
        </BlockClouds>
      </BlockBox>
    </BlockWrapper>
  );
};

export default Block;
