import React from 'react';
import {View} from 'react-native';

export function Separator(props) {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        width: props.screenWidth,
        height: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: '#000',
        borderTopWidth: 1,
        borderBottomWidth: 1,
      }}
    />
  );
}
