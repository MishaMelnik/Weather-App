import React from 'react';
import { IDay } from '../../../models/models';
import styled from 'styled-components';

const ItemWrapper = styled.li`
  list-style: none;
  width: 80px;
  height: 100px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
const ItemImg = styled.img`
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
const ItemMin = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;
const ItemMax = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #b9b9b9;
`;

const WeekItem = ({ days }: IDay) => {
  const { day, min, max, img } = days;
  return (
    <ItemWrapper>
      <ItemContainer>
        <ItemDay>{day}</ItemDay>
        <ItemImg src={img} alt="icon" />
        <ItemTemperature>
          <ItemMin>{`${min}° `}</ItemMin>
          <ItemMax>{`${max}° `}</ItemMax>
        </ItemTemperature>
      </ItemContainer>
    </ItemWrapper>
  );
};

export default WeekItem;
