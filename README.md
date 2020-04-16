# World Weather

[Link to demo](https://master.d3seod7hy5e1vk.amplifyapp.com/)

## Features

1. Board that shows 5 day forecast of any city searched by the user.

2. [Jest](https://jestjs.io/en/) and [Enzyme](https://airbnb.io/enzyme/docs/api/) were used to implement unit tests.

4. [Create React App](https://github.com/facebook/create-react-app) was used to bootstrap the preoject.

5. [React Places Autocomplete](https://www.npmjs.com/package/react-places-autocomplete) was used to generate the autocomplete cities information through the Google Maps Places Library and Google Maps Geocoder API.

6. Responsive design.

7. Auto deploy using AWS Amplify Console.


## How to run the project

### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### How to test: `npm test`

Launches the test runner in the interactive watch mode.<br>


### How to build: `npm run build`

Builds the app for production to the `build` folder.<br>

## Creation process
### Use cases
As a user:

1. I want to be able to access to the homepage and enter a city name.
2. I want to use [OpenWeatherMap forecast API](https://openweathermap.org/forecast5) to get the 5 day forecast.
3. I want to be able to see more weather detail of a specific day.

### Notes

1. I researh about the Open Weather Map API and create the main forecast call to get the data.
2. I started to develop the main functionalities of the main components (Forecast and Card).

3. I started with a list of cards but in this way you have to scroll so much, so I decided to change the view to a board where you can see all the days availables to consult.

4. New component were added (CardDetail, HourlyForecast, Weather) in order to separate de day weather details from the Forecast component and also to have a better structure.

5. I added the Searchbar component that lets the user to see the weather of any city. For this, I had to add learn how to use React Places Autocomplete.

### Tradeoffs
1. I had to stop doing more unit tests in order to get focused on the features and improve the data visualization.
2. Initially I was creating cards for every item in the forecast list, but I realized that it was not the best decision, so I decided to trasnform the initial cards into boxes and use the card only to show the weather detail.

## Future implementation/improvements
1. Add graphics in other to facilitate the readability of the information and improve user experience.
2. Improve unit tests.
3. Improve styles.
4. Accesibility checks.





