import React, { useState, Fragment } from "react";
import "./App.css";
import Weather from "./components/Weather/Weather";
import Searchbar from "./components/Searchbar/Searchbar";

import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 15rem;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  background-color: #FFF;
  color: #110d3c;

  @media(max-width: 75rem) {
    padding: 2rem;
    width: 100%;
  }

  @media(max-width: 56.25em) {
    display: block;
    text-align: center;
  }
`;

const Main = styled.main`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  justify-content: center;
  background-color: #8bcbe4;

  @media(max-width: 75rem) {
    width: 100%;
  }
`;

const App = () => {
  const [lat, setLat] = useState(localStorage.getItem("lat") || null);
  const [lng, setLng] = useState(localStorage.getItem("lng") || null);
  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("address"))
  );

  const onSubmitSearchBar = ({ lat, lng }, address) => {
    const currentCountry = (key, string) =>
      localStorage.setItem(key, JSON.stringify(string));
    setLat(String(lat));
    setLng(String(lng));
    setAddress(String(address));
    currentCountry("lat", lat);
    currentCountry("lng", lng);
    currentCountry("address", address);
  };

  return (
    <Fragment>
      <Header>
        <h1>World Weather</h1>
        {window.google && <Searchbar address={""} onSubmit={onSubmitSearchBar} />}
      </Header>
      <Main>
        {lat && lng && <Weather lat={lat} lng={lng} address={address} />}
      </Main>
    </Fragment>
  );
};

export default App;
