import React from "react";
import { shallow } from "enzyme";
import Forecast from "./Forecast";

const forecast = {
  16: [
    {
      dt: 1541430000,
      main: {
        temp: 284.37,
        temp_min: 284.37,
        temp_max: 284.673,
        pressure: 1008.66,
        sea_level: 1013.28,
        grnd_level: 1008.66,
        humidity: 98,
        temp_kf: -0.3
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 6.42,
        deg: 146.004
      },
      rain: {
        "3h": 0.0325
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2018-11-05 15:00:00",
      date_label: 16
    }
  ],
  17: [
    {
      dt: 1541430000,
      main: {
        temp: 284.37,
        temp_min: 284.37,
        temp_max: 284.673,
        pressure: 1008.66,
        sea_level: 1013.28,
        grnd_level: 1008.66,
        humidity: 98,
        temp_kf: -0.3
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 6.42,
        deg: 146.004
      },
      rain: {
        "3h": 0.0325
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2018-11-05 15:00:00",
      date_label: 16
    }
  ]
};


const onChangeTime = jest.fn();
const isToday = jest.fn();

describe("<Forecast />", () => {
  const wrapper = shallow(<Forecast forecast={forecast} onChangeTime={onChangeTime} isToday={isToday} selectedDay={forecast[0]}/>);

  it("should render component correctly", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('Card').length).toBe(2);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
