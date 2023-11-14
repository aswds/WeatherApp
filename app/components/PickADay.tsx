import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/base';

interface PickADay {
  forecaseDays: Array<{date: string}>;
  pickADay: (day: string) => void;
}

const PickADay = ({forecaseDays, pickADay}: PickADay) => {
  return (
    <View style={{height: 100, width: '100%'}}>
      <FlatList
        style={{flex: 1}}
        data={forecaseDays}
        renderItem={({item, index}) => {
          return (
            <Button
              style={{height: 100, backgroundColor: 'black'}}
              title={item.date}
              key={index}
              onPress={() => pickADay(index)}></Button>
          );
        }}
        horizontal
      />
    </View>
  );
};

export default PickADay;

const styles = StyleSheet.create({});
