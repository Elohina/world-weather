import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import styled from 'styled-components';

const Input = styled.input`
  padding: 2rem;
  width: 100%;
  height: 3rem;
  font-size: 2rem;
`;

const Form = styled.form`
  width: 50%;

  @media(max-width: 56.25em) {
    width: 100%;
  }
`;

export default function Searchbar({ address: initialAddress, onSubmit }) {
  const [address, setAddress] = useState(initialAddress);

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => onSubmit(latLng, address))
      .catch((error) => console.error("Error", error));
    setAddress(address);
  };

  return (
    <Form>
      <PlacesAutocomplete
        value={address}
        onChange={(address) => setAddress(address)}
        onSelect={(address) => handleSelect(address)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Input
              name="city"
              data-value={address}
              {...getInputProps({
                placeholder: "Your city",
              })}
            />
            <div className="autocomplete-dropdown-container" style={{position: 'absolute', boxShadow: '10px 10px 17px 0px rgba(0,0,0,0.75)'}}>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer", paddingLeft: '2rem', fontSize: '2rem'}
                  : { backgroundColor: "#ffffff", cursor: "pointer", paddingLeft: '2rem', fontSize: '2rem' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </Form>
  );
}

Searchbar.defaultProps = {
  address: "",
};

Searchbar.propTypes = {
  address: PropTypes.string,
  onSubmit: PropTypes.func
}
