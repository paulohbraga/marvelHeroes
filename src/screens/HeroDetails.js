/* eslint-disable prettier/prettier */
import React,{useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
} from 'react-native';

const HeroDetails = ({route}) => {

  const { item } = route.params;
  const {items} = item.events;
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

  }, [ heightAnimated, imgAnimatedWidth]);

  return (
    <View style={{flex:1, flexDirection: 'column', alignItems: 'center',padding: 5,backgroundColor: '#E21320'}}>
      <Text style={{fontSize: 40, padding: 20, fontFamily: 'Marvel-Regular', color: '#fff'}}>{item.name.toUpperCase()}</Text>
    <Animated.View style={{width: imgAnimatedWidth, height: heightAnimated}}>
      <Image source={{
        uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }}
      style={{width: 300, height: 300, borderRadius: 200, borderColor: 'yellow', borderWidth: 2}}
      />
      </Animated.View>
      <View style={{backgroundColor: '#000', margin: 20, padding: 50, borderRadius: 5, width: '80%'}}>
        <Text style={{fontSize: 25, fontFamily: 'Marvel-Regular', color: '#fff', marginBottom: 10}}>EVENTOS</Text>
        {events.length > 0 ? events.map((event, index) => {
          return <Text key={index} style={{fontSize: 20, color: '#fff'}}>{event.name}</Text>;
        }) : <Text style={{fontSize: 20, color: '#fff'}}>Não existem eventos</Text>}
      </View>
    </View>);
};

export default HeroDetails;
