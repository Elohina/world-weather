import axios from 'axios';

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const UNITS_URL = "units=metric";
const API_KEY_URL = "APPID=aaaa0d9df7ab5eac79e26cf42b2e3fe9";
const IMG_SRC = "http://openweathermap.org/img/wn/";

export const fetchForecast = async (lat, lng) => {
    const result = await axios.get(`${API_BASE_URL}?lat=${lat}&lon=${lng}&${UNITS_URL}&${API_KEY_URL}`);

    return result.data.list;
};

export const getImgURL = (imageName) => (`${IMG_SRC}${imageName}@2x.png`);