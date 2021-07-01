import React from 'react';
import {Text, StyleSheet} from 'react-native';

export function EventsLabel() {
  return <Text style={styles.eventsText}>EVENTOS</Text>;
}

export const styles = StyleSheet.create({
  eventsText: {
    fontSize: 25,
    fontFamily: 'Marvel-Regular',
    color: '#fff',
    marginBottom: 10,
  },
});
