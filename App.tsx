import {ThemeProvider} from '@rneui/themed';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {theme} from './app/theme/theme';
import MainScreen from './app/screens/MainScreen';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import {requestLocationPermission} from './app/helpers/requestPermission';

function App(): JSX.Element {
  useEffect(() => {
    requestLocationPermission();
  });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <MainScreen />
        </SafeAreaView>
      </Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
