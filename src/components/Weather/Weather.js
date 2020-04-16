import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import CardDetail from '../CardDetail/CardDetail';
import { fetchForecast } from '../../api/weatherApi';
import styled from 'styled-components';

import Forecast from '../Forecast/Forecast';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media(max-width: 75em) {
    flex-direction: column;
  }
`;

const Weather = ({ lat, lng, address }) => {
  const [forecast, setForecast] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedDay, setSelectedDay] = useState({});
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchForecast(lat, lng);
        const mapped_days = _.mapValues(result, (element) => {
          return {
            ...element,
            date_label: new Date(element.dt * 1000).getUTCDate(),
          };
        });

        const weather_days = _.mapValues(_.groupBy(mapped_days, "date_label"));
        setForecast(weather_days);
        setSelectedCard(mapped_days[0]);
        setSelectedDay(weather_days[mapped_days[0].date_label]);
        setShowErrorMessage(false);
      } catch (error) {
        setShowErrorMessage(true);
      }

    };

    fetchData();
  }, [lat, lng]);

  const isToday = (date) => {
    const today = new Date().getUTCDate();
    return today === date;
  };

  const handleOnSelectCard = (card, day) => {
    setSelectedCard(card);
    setSelectedDay(forecast[day]);
  }

  return (
    <Container>
      { showErrorMessage ? (<p>Oops! There was a problem fetching the weather. Please try again later.</p>)
      : (
        <Fragment>
          <CardDetail
            selectedDay={selectedDay}
            selected_card={selectedCard}
            isToday={isToday(selectedCard.date_label)}
            address={address}
          />
          <Forecast
            forecast={forecast}
            onChangeTime={(card, day)=>{handleOnSelectCard(card, day);}}
            isToday={isToday}
            selectedDay={selectedDay}
          />
        </Fragment>
      )}
    </Container>
  );
};

export default Weather;

Weather.propTypes = {
  lan: PropTypes.string,
  lng: PropTypes.string,
  address: PropTypes.string
}
