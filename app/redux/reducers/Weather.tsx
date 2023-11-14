import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {fetchWeather} from '../actions/fetchWeather';

type WeatherDay = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
  };
  hour: {
    time: string;
    temp_c: number;
  };
};

export type WeatherData = {
  weatherData: {
    location: {
      name: string;
      region: string;
      country: string;
      localtime: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
    forecast: {
      forecastday: WeatherDay[];
    };
  };
  isLoading: boolean;
  error?: string;
};

const initialState: WeatherData = {
  weatherData: {},
  isLoading: true,
  error: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.weatherData = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.isLoading = false;

      state.error = action.payload;
    });
  },
});

export default weatherSlice.reducer;
