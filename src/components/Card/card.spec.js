import React from "react";
import { mount } from "enzyme";
import Card from "./Card.js";

describe("<Card />", () => {
  const day_weather = {
    dt: 1541430000,
    main: {
      temp: 284.37,
      temp_min: 284.37,
      temp_max: 284.673,
      pressure: 1008.66,
      sea_level: 1013.28,
      grnd_level: 1008.66,
      humidity: 98,
      temp_kf: -0.3,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: {
      all: 92,
    },
    wind: {
      speed: 6.42,
      deg: 146.004,
    },
    rain: {
      "3h": 0.0325,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2020-04-16 15:00:00",
    date_label: 16
  };

  const isToday = jest.fn(x => true);
  const onSelectCard = jest.fn();
  const wrapper = mount(<Card data={day_weather} dateLabel={day_weather.date_label} onSelectCard={onSelectCard} isToday={isToday} />);

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should create a card with day", () => {
    expect(wrapper.find('h4').text()).toBe('Today');
  });
});
