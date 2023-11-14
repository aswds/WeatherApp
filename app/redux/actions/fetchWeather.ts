import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';
import {ILocation, weatherRange} from '../reducers/types';

export const fetchWeather = createAsyncThunk(
  'weather/fetch_weather',
  async ({
    location,
    weatherRange,
  }: {
    location: ILocation;
    weatherRange: weatherRange;
  }) => {
    // Destructure the parameters from the payload object
    const {lat, lon} = location;
    const apiKey = Config.WEATHER_API;
    const daysToFetch = weatherRange.charAt(0);
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=${daysToFetch}&aqi=no&alerts=no`,
      );
      if (!res.ok) {
        return Error('Network response was not ok');
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return Error('Something went wrong...');
    }
  },
);
