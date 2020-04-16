import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { getImgURL } from '../../api/weatherApi';

const Container = styled.div`
  display:flex;
  justify-content: center;
  margin: 5rem 0;
`;

const WeatherImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

const Item = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

const HourlyForecast = ({hourlyForecast}) => {
  return(
    <Container>
      {Object.keys(hourlyForecast).map((key, i) => {
        return (
          <Item key={`${i}-hour`}>
            <p>{format(new Date(hourlyForecast[key].dt_txt), 'haaaa')}</p>
            <WeatherImg src={getImgURL(hourlyForecast[key].weather[0].icon)} alt={hourlyForecast[key].weather[0].description}/>
            <p>{hourlyForecast[key].main.temp} °C</p>
          </Item>

        );
      })}
    </Container>
  );
};

export default HourlyForecast;