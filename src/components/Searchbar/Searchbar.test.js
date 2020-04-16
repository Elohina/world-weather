import React from "react";
import { mount } from "enzyme";
import Searchbar from "./Searchbar";


jest.mock('react-places-autocomplete', () => {
  const React = require('react'); 
  class PlacesAutocomplete extends React.Component {
    renderProps = {
      getInputProps: jest.fn(({ placeholder, className }) => ({ placeholder, className })),
      suggestions: [],
      getSuggestionItemProps: jest.fn(),
    };

    render() {
      return <>{this.props.children(this.renderProps)}</>;
    }
  }

  return PlacesAutocomplete;
});

const onSubmit = jest.fn();

describe("<Searchbar />", () => {
  const wrapper = mount(<Searchbar address={""} onSubmit={onSubmit} />);

  it("should render component correctly", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('input').text()).toBe("");
  });
});
