import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import HourlyWeatherItem from './HourlyWeatherItem';
import {makeStyles} from '@rneui/themed';

const HourlyWeather = ({hourlyData}) => {
  return (
    <View style={{height: 100}}>
      <FlatList
        data={hourlyData?.hour}
        style={{flex: 1}}
        horizontal
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        renderItem={({item}) => <HourlyWeatherItem item={item} />}
      />
    </View>
  );
};

export default HourlyWeather;
