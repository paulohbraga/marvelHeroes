/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

const HeroDetails = ({route}) => {

  const { item } = route.params;
  const {items} = item.events;
  const events = items.slice(0, 3);

  return (
    <View style={{flex:1, flexDirection: 'column', alignItems: 'center',padding: 5,backgroundColor: '#E21320'}}>
      <Text style={{fontSize: 40, padding: 20, fontFamily: 'Marvel-Regular', color: '#fff'}}>{item.name.toUpperCase()}</Text>
      <Image source={{
        uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }}
      style={{width: 300, height: 300, borderRadius: 200, borderColor: '#FFAF32', borderWidth: 4}}
      />
      <View style={{backgroundColor: '#000', margin: 20, padding: 50, borderRadius: 5, width: '80%'}}>
        <Text style={{fontSize: 25, fontFamily: 'Marvel-Regular', color: '#fff', marginBottom: 10}}>EVENTOS</Text>
        {events.length > 0 ? events.map((event, index) => {
          return <Text key={index} style={{fontSize: 20, color: '#fff'}}>{event.name}</Text>;
        }) : <Text style={{fontSize: 20, color: '#fff'}}>Não existem eventos</Text>}
      </View>
    </View>);
};

export default HeroDetails;
