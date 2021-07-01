/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
import {
  Animated, Text, View, StyleSheet,
} from 'react-native';
import { HeroImage } from '../components/HeroImage';
import { HeroName } from '../components/HeroName';
import { EventsLabel } from '../components/EventsLabel';


const HeroDetails = ({ route }) => {

  const { item } = route.params;
  const { items } = item.events;
  const events = items.slice(0, 3);
  const heightAnimated = useRef(new Animated.Value(0)).current;
  const imgAnimatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(heightAnimated, {
      toValue: 350,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(imgAnimatedWidth, {
      toValue: 300,
      duration: 500,
      useNativeDriver: false,
    }).start();

  }, [heightAnimated, imgAnimatedWidth]);

  return (
    <View style={styles.container}>
      <HeroName name={item.name.toUpperCase()} />
      <HeroImage thumbnail={item.thumbnail} heightAnimated={heightAnimated} imgAnimatedWidth={imgAnimatedWidth} />
      <View style={styles.events}>
        <EventsLabel />
        {events.length > 0 ? events.map((event, index) => {
          return <Text key={index} style={styles.eventName}>{event.name}</Text>;
        }) : <Text style={styles.noEvent}>Não existem eventos</Text>}
      </View>
    </View>);
};

export default HeroDetails;

export const styles = StyleSheet.create({
  eventName: {
    fontSize: 20,
    color: '#fff',
  },
  events: {
    backgroundColor: '#000',
    margin: 20,
    padding: 50,
    borderRadius: 5,
    width: '80%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#E21320',
  },
});
