import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../assets/constants';

export function HeroName(props) {
  return <Text style={styles.textHero}>{props.name}</Text>;
}

export const styles = StyleSheet.create({
  textHero: {
    fontSize: 30,
    padding: 10,
    fontFamily: 'Marvel-Regular',
    color: COLORS.white,
  },
});
