import React, { Fragment } from 'react';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import { getImgURL } from '../../api/weatherApi';
import { format } from 'date-fns';

import styled from 'styled-components';

const StyledCardDetail = styled.div`
  width: 50%;
  padding: 3em;
  text-align: center;

  p {
    font-size: 1.6rem;
    color: #515454;
  }

  @media(max-width: 75em) {
    width: 100%;
  }
`;

const TemperatureStyle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: #110d3c;

  h1 {
    font-size: 8rem;
  }

  h5 {
    font-size: 2.6rem;
    margin-top: 3rem;
    font-weight: 800;
  }
`;

const ListContainer = styled.ul`
  width: 70%; 
  margin: 4rem auto;
  padding: 0;

  @media(max-width: 576px) {
    width: 100%;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  
  h6, p {
    font-size: 2rem;
    color: black;
  }
`;

const CurrentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  div p {
    font-size: 2rem;
  }
`;

const CardDetail = ({ selectedDay, selected_card, isToday, address }) => (
  <StyledCardDetail>
    {selected_card && selected_card.dt && (
      <Fragment>
        <CurrentInfo>
          <img
            src={getImgURL(selected_card.weather[0].icon)}
            alt={selected_card.weather[0].description}
          />
          <div>
            <h3>
              {isToday
                ? `Today`
                : format(new Date(selected_card.dt_txt), 'EEE')}
            </h3>
            <p>
              {format(new Date(selected_card.dt_txt), 'h:mm aaaa')}
            </p>
          </div>
        </CurrentInfo>
        <TemperatureStyle>
          <h1>
            {selected_card.main.temp}
          </h1>
          <h5>°C</h5>
        </TemperatureStyle>
        <h4>{address}</h4>
        <p>Feels like {selected_card.main.feels_like}</p>
        <HourlyForecast hourlyForecast={selectedDay} />
        <ListContainer>
          <ListItem>
            <h6>Humidity</h6>
            <p>{selected_card.main.humidity}%</p>
          </ListItem>
          <ListItem>
            <h6>Wind</h6>
            <p>
              {selected_card.wind.speed} km/h
            </p>
          </ListItem>
          {selected_card.rain && selected_card.rain["3h"] && (
            <ListItem>
              <h6>Rain</h6>
              <p>
                Last 3h:{" "}
                {new Intl.NumberFormat("en-GB", {
                  maximumFractionDigits: 2,
                }).format(selected_card.rain["3h"])}{" "}
                mm
              </p>
            </ListItem>
          )}
          <ListItem>
            <h6>Maximun Temp.</h6>
            <p>{selected_card.main.temp_max}°</p>
          </ListItem>
          <ListItem>
            <h6>Minimum Temp.</h6>
            <p>{selected_card.main.temp_min}°</p>
          </ListItem>
          <ListItem>
            <h6>Pressure</h6>
            <p>
              {selected_card.main.pressure} hPa
            </p>
          </ListItem>
          <ListItem>
            <h6>Sea level</h6>
            <p>
              {selected_card.main.sea_level} hPa
            </p>
          </ListItem>
          <ListItem>
            <h6>Ground level</h6>
            <p>
              {selected_card.main.grnd_level} hPa
            </p>
          </ListItem>
          <ListItem>
            <h6>Wind</h6>
            <p>
              Speed: {selected_card.wind.speed}m/s
            </p>
          </ListItem>
        </ListContainer>
      </Fragment>
    )}
  </StyledCardDetail>
);

export default CardDetail;
