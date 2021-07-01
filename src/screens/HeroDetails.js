/* eslint-disable prettier/prettier */
import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
} from 'react-native';
import ApplicationContext from '../context/ApplicationContext';

const HeroDetails = ({route, navigation}) => {
  const { item } = route.params;
  return (
    <View>
      <Text>detalhes {item.id}</Text>
    </View>);
};

export default HeroDetails;
