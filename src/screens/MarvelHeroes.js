/* eslint-disable prettier/prettier */
import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import ApplicationContext from '../context/ApplicationContext';

const MarvelHeroes = ({navigation}) => {

  return (
    <View>
      <Text>testess</Text>
      <Button title="Proxima" onPress={() => navigation.navigate('Hero Details')}/>
    </View>);
};

export default MarvelHeroes;
