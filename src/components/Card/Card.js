import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getImgURL } from '../../api/weatherApi';
import { format } from 'date-fns';

const WeekdayText = styled.h4`
  color: #343a40;
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
`;

const DateText = styled.h5`
  color: #515454;
  margin-bottom: .5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
`;

const StyledCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${props => props.isSelected && 'rgba(255,255,255,0.24)'};

  :hover {
    background-color: rgba(255,255,255,0.24);
  }
`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 8rem;
  justify-content: center;
  align-items: center;

  img {
    height: 6rem;
  }
`;

const NumberText = styled.p`
  font-size: 1.8rem;
`;

const DescriptionText = styled.p`
  color: #343a40;
  margin-bottom: .5rem;
`;

const MinTemp = styled(NumberText)`
  color: #2e40c7;
`;

const MaxTemp = styled(NumberText)`
  color: #de5555;
`;


const Card = ({dateLabel, data, onSelectCard, isToday, isSelected}) => {

  const showDetail= () => {
    onSelectCard(data, dateLabel);
  }
  
  return (
    <StyledCard onClick={() => showDetail()} id={data.dt + "heading"} isSelected={isSelected}>
      <CardColumn style={{alignItems: 'start'}}>
        <WeekdayText>
          { isToday(dateLabel) ?
            "Today" :
            format(new Date(data.dt_txt), 'EEEE')
          }
        </WeekdayText>
        <DateText>
          {format(new Date(data.dt_txt), 'd MMM yy')}
        </DateText>
      </CardColumn>
      <CardColumn>
        <img
          src={getImgURL(data.weather[0].icon)}
          alt=""
        />
        <DescriptionText>{data.weather[0].main}</DescriptionText>
      </CardColumn>
      <CardColumn>
        <NumberText>{data.clouds.all}%</NumberText>
        <DescriptionText>Clouds</DescriptionText>
      </CardColumn>
      <CardColumn>
        <MinTemp>
          {data.main.temp_min}°C
        </MinTemp>
        <MaxTemp>
          {data.main.temp_max}°C
        </MaxTemp>
      </CardColumn>
    </StyledCard>
  );
}

export default Card;

Card.propTypes = {
  dateLabel: PropTypes.number,
  data: PropTypes.object,
  onSelectCard: PropTypes.func,
  isToday: PropTypes.func
};