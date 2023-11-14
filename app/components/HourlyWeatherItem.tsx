import {makeStyles} from '@rneui/themed';
import React from 'react';
import {View, Text, Image} from 'react-native';

const HourlyWeatherItem = ({item}) => {
  const styles = useStyles();
  return (
    <View style={{flexDirection: 'column', alignItems: 'center', margin: 10}}>
      <Image
        source={{uri: `http:${item.condition?.icon}`}}
        style={{width: 30, height: 30}}
      />
      <Text style={styles.textStyle}>{item.temp_c}°C</Text>
      <Text style={styles.textStyle}>{item.time}</Text>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  textStyle: {
    color: theme.colors.grey2,
    fontSize: 20,
    marginRight: 10,
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
export default HourlyWeatherItem;
