import {Button} from '@rneui/base';
import {ScrollView, View} from 'react-native';
import {weatherRange} from '../redux/reducers/types';
import {makeStyles} from '@rneui/themed';

type WeatherRangeButtons = {
  fetchData: (range: weatherRange) => void;
};

const WeatherRangeButtons = ({fetchData}: WeatherRangeButtons) => {
  const styles = useStyles();
  const weatherRangeOptions: weatherRange[] = [
    '1day',
    '3days',
    '7days',
    '14days',
  ];

  return (
    <View
      style={{maxHeight: 100, alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView
        style={{}}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        horizontal>
        {weatherRangeOptions.map((range, i) => (
          <Button
            title={range}
            onPress={() => {
              console.log(range);
              fetchData(range);
            }}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            key={i}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    margin: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    width: 100,
  },
}));

export default WeatherRangeButtons;
