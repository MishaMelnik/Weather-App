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
  box-shadow: 5px 0 14px rgba(0, 0, 0, 0.1);
  @media (max-width: 1280px) {
    width: 260px;
  }
  @media (max-width: 679px) {
    width: 200px;
  }
  @media (max-width: 526px) {
    width: 100%;
  }
`;
const BlockPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 25px 30px;
  width: 280px;
  @media (max-width: 1280px) {
    width: 93%;
    padding: 30px 5px 0;
  }
  @media (max-width: 526px) {
    width: 86%;
    padding: 30px 20px 0;
  }
`;
const BlockSearchIcon = styled.img`
  margin: 0 9.79px 0 7.8px;
  @media (max-width: 679px) {
    margin: 0 5px 0 7.8px;
  }
`;
const BlockHomeIcon = styled.img`
  background-color: #f3f3f3;
  transition: all 0.25s ease;
  border-radius: 20px;
  padding: 7.5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  &:hover {
    color: aliceblue;
    transition: 0.3s;
    cursor: pointer;
    transform: translateY(-5px);
  }
  &:active {
    background-color: #b9b9b9;
  }
`;
const BlockSearchLine = styled.div`
  background-color: #f3f3f3;
  border-radius: 20px;
  width: 240px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media (max-width: 1280px) {
    width: 190px;
  }
  @media (max-width: 1026px) {
    width: 180px;
  }
  @media (max-width: 679px) {
    width: 150px;
  }
  @media (max-width: 526px) {
    width: 260px;
  }
`;
const BlockInput = styled.input`
  outline: none;
  height: 30px;
  width: 75%;
  border: none;
  font-size: 12px;
  background-color: transparent;
`;
const BlockImg = styled.img`
  width: 212px;
  height: 185.41px;
  margin: 65px 60px 38.59px 60px;
  @media (max-width: 1280px) {
    margin: 65px 20px 38.59px;
  }
  @media (max-width: 679px) {
    width: 170px;
    height: 150px;
    margin: 80px 10px 50px;
  }
  @media (max-width: 526px) {
    width: 212px;
    height: 150px;
    margin: 80px 70px 50px;
  }
`;
const BlockBox = styled.div`
  width: 280px;
  margin: 0 25px 40px;
  @media (max-width: 1280px) {
    width: 200px;
  }
  @media (max-width: 679px) {
    margin: 0 15px 40px;
    width: 160px;
  }
  @media (max-width: 526px) {
    margin: 0 29px 40px;
    width: 81%;
  }
`;
const BlockInformationSection = styled.div`
  @media (max-width: 526px) {
    display: flex;
    justify-content: space-between;
  }
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
  @media (max-width: 526px) {
    margin-top: 10px;
  }
  //@media (max-width: 1280px) {
  //  width: 200px;
  //}
  //@media (max-width: 679px) {
  //  width: 140px;
  //}
  //@media (max-width: 526px) {
  //  width: 100%;
  //}
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
const BlockCloudsSection = styled.div`
  border-top: 1px solid #b9b9b9;
  @media (max-width: 526px) {
    display: flex;
    justify-content: space-between;
  }
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
  @media (max-width: 679px) {
    margin-right: -5px;
  }
`;
const BlockCheckoutIcon = styled.img`
  margin-left: 4px;
  margin-right: 13px;
  width: 24px;
  height: 24px;
  @media (max-width: 679px) {
    margin-right: 0;
  }
  @media (max-width: 526px) {
    margin-left: 10px;
    margin-right: -5px;
  }
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
        <BlockInformationSection>
          <BlockInformation>
            <BlockNumber>9</BlockNumber>
            <BlockUnit>°C</BlockUnit>
          </BlockInformation>
          <BlockDate>
            <BlockLocation>Kyiv, UA</BlockLocation>
            <BlockDay>Monday,</BlockDay>
            <BlockTime>13:17</BlockTime>
          </BlockDate>
        </BlockInformationSection>
        <BlockCloudsSection>
          <BlockClouds>
            <BlockCloudsIcon src={cloudsIcon} alt="clouds icon" />
            <BlockCloudsPercent>Clouds - 75%</BlockCloudsPercent>
          </BlockClouds>
          <BlockClouds>
            <BlockCheckoutIcon src={checkoutIcon} alt="checkout icon" />
            <BlockCloudsPercent>Broken clouds</BlockCloudsPercent>
          </BlockClouds>
        </BlockCloudsSection>
      </BlockBox>
    </BlockWrapper>
  );
};

export default Block;
