import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styled from 'styled-components';

const StyledForecast = styled.div`
  width: 50%;
  padding: 3em;

  @media(max-width: 75em) {
    width: 100%;
  }
`;

const Forecast = ({ forecast, onChangeTime, isToday, selectedDay }) => { 
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (selectedDay[0]) {
      setSelectedCard(selectedDay[0].date_label);
    }
  }, [selectedDay]);

  const onSelectCard = (data, dateLabel) => {
    onChangeTime(data, dateLabel);
    setSelectedCard(dateLabel);
  }

  return (
    <StyledForecast>
      <h3>Week</h3>
      <h5>Click on each day to see the details</h5>
      { Object.keys(forecast).map((day, i) => {
        return (
          <Card
            key={i}
            data={forecast[day][0]}
            onSelectCard={(data, dateLabel) => (onSelectCard(data, dateLabel))}
            dateLabel={forecast[day][0].date_label}
            isToday={isToday}
            isSelected={selectedCard === forecast[day][0].date_label}
          />
        );
      })}
    </StyledForecast>
  );
};

export default Forecast;

Forecast.propTypes = {
  forecast: PropTypes.object,
  onChangeTime: PropTypes.func,
  isToday: PropTypes.func
};
