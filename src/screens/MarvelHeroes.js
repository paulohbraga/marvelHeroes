/* eslint-disable prettier/prettier */
import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import ApplicationContext from '../context/ApplicationContext';

const MarvelHeroes = ({navigation}) => {

  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: 10 }}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#E21320'}}>Busca Marvel</Text>
      <View style={{width:'80%', margin: 10}}>
        <TextInput style={{borderRadius: 10, borderColor: '#626262', borderWidth: 0.5, height: 40}} placeholder="Digite o nome do personagem" onChangeText={(text) => console.log(text)}/>
      </View>
      <View style={{backgroundColor: '#E21320', width: '100%', height: 40, flexDirection: 'row', alignItems: 'center' ,justifyContent: 'space-around' }}>
        <Text>Nome</Text>
        <Text>Nome</Text>
      </View>
      <Button title="Proxima" onPress={() => navigation.navigate('Detalhes')}/>
    </View>);
};

export default MarvelHeroes;
