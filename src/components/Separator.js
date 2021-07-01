import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
export const screenWidth = Dimensions.get('window').width;

export function Separator(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'yellow',
    width: screenWidth,
    height: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: '#000',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});
