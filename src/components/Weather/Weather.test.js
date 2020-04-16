import React from "react";
import { mount, shallow } from "enzyme";
import Weather from "./Weather.js";

describe("<Weather />", () => {
  const wrapper = mount(<Weather lat={"53.3498053"} lng={"-6.2603097"} address={"Dublin, Ireland"} />);
  
  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component correctly", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('CardDetail').length).toBe(1);
    expect(wrapper.find('Forecast').length).toBe(1);
  });
});