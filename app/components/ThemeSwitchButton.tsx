import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import {Button} from '@rneui/base';
import {useTheme, useThemeMode} from '@rneui/themed';

const ThemeSwitchButton = () => {
  const {mode, setMode} = useThemeMode();
  const toggleSwitch = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={mode === 'dark' ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={mode === 'light'}
    />
  );
};

export default ThemeSwitchButton;

const styles = StyleSheet.create({
  container: {},
});
