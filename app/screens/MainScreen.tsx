import {
  ActivityIndicator,
  Image,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '@rneui/themed';
import {makeStyles} from '@rneui/themed';
import {useActions} from '../hooks/useAction';
import Geolocation from '@react-native-community/geolocation';
import {useTypedSelector} from '../hooks/useTypedSelector';
import WeatherRangeButtons from '../components/WeatherButtons';
import {ILocation} from '../redux/reducers/types';
import useUserLocation from '../hooks/useUserLocaiton';
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import HourlyWeather from '../components/HourlyWeather';
import PickADay from '../components/PickADay';

const MainScreen = () => {
  const {fetchWeather} = useActions();
  const styles = useStyles();
  const {weatherData, isLoading, error} = useTypedSelector(
    state => state.weatherReducer,
  );
  const [forecastDay, setForecastDay] = useState<number>(0);
  const userLocation = useUserLocation();
  useEffect(() => {
    fetchWeather({location: userLocation, weatherRange: '1day'});
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  console.log(weatherData.forecast.forecastday.length);
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{height: 100, aspectRatio: 1}}
          source={{uri: 'https:' + weatherData.current?.condition.icon}}
        />
        <Text style={[styles.textStyle, styles.boldText, {fontSize: 30}]}>
          {weatherData.current?.temp_c}°C
        </Text>
        <Text></Text>
      </View>
      <View style={{width: '100%'}}>
        <HourlyWeather
          hourlyData={weatherData.forecast?.forecastday[forecastDay]}
        />
        <PickADay
          forecaseDays={weatherData.forecast?.forecastday}
          pickADay={function (day: string): void {
            setForecastDay(day);
          }}
        />
      </View>

      <View style={{}}>
        <WeatherRangeButtons
          fetchData={range => {
            fetchWeather({location: userLocation, weatherRange: range});
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.textStyle}>
            your current location:{' '}
            <Text style={styles.boldText}>{weatherData.location?.region}</Text>
          </Text>
          <ThemeSwitchButton />
        </View>
      </View>
    </View>
  );
};

export default MainScreen;

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
    padding: 10,
  },
  textStyle: {
    color: theme.colors.white,
    fontSize: 20,
    padding: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
