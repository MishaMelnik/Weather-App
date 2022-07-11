import React from 'react';
// PACKAGE
import styled from 'styled-components';
// MODELS
import { IDay } from '../../../models/models';
// THEME
import { lightTheme } from '../../../styles/theme/colorsLight';
import { boxShadow } from '../../../styles/theme/boxShadow';
import { getIcon } from '../../../functions/getIcon';

const ItemWrapper = styled.li`
  list-style: none;
  max-width: 80px;
  padding: 8px 26px 8px;
  height: 100px;
  background-color: ${lightTheme.generalWhiteBackgroundColor};
  box-shadow: ${boxShadow.weekBoxShadow};
  border-radius: 10px;
`;
const ItemContainer = styled.div`
  text-align: center;
`;
const ItemDay = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin-top: 10px;
  margin-bottom: 4px;
`;
const ItemIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-bottom: 4px;
`;
const ItemTemperature = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 36px;
`;
const ItemDifference = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;

const WeekItem = ({ days }: any) => {
  // console.log(days);
  const { day, minTemp, maxTemp, weatherIcon } = days;
  return (
    <ItemWrapper>
      <ItemContainer>
        <ItemDay>{day}</ItemDay>
        <ItemIcon src={getIcon(weatherIcon)} alt="icon" />
        <ItemTemperature>
          <ItemDifference>{`${minTemp}° `}</ItemDifference>
          <ItemDifference>{`${maxTemp}° `}</ItemDifference>
        </ItemTemperature>
      </ItemContainer>
    </ItemWrapper>
  );
};

export default WeekItem;
