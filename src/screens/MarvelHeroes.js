/* eslint-disable prettier/prettier */
import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ApplicationContext from '../context/ApplicationContext';




const MarvelHeroes = ({navigation}) => {

  const [visibleSearch, setvisibleSearch] = useState(false);

  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes', {item: item})} style={{backgroundColor: 'white', elevation: 2, borderWidth: 0.5, borderRadius: 10, borderColor: 'red', margin: 5, height: 120, width: screenWidth - 40,justifyContent:  'space-between', alignContent: 'space-around',alignItems: 'center', flexDirection: 'row'}}>
      <View style={{width: 100, marginLeft: 30}}>

      <Image source={{
        uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }}
      style={{width: 100, height: 100, borderRadius: 50}}
      />
      </View>
      <View style={{width: '50%'}}>

      <Text style={{fontSize: 16, fontStyle:'italic', fontWeight:'bold' }}>{item.name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
  const screenWidth = Dimensions.get('window').width;
  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
      />
    );
  };

  const renderFooter = () => {
    if (!isLoading) {return null;}
    return (
      <View>
        <ActivityIndicator color="red" />
      </View>
    );
  };

  const {
    getHeroes,
    heroes,
    offset,
    setOffset,
    isLoading,
  } = useContext(ApplicationContext);

  useEffect(() => {
    getHeroes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[offset]);
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%', backgroundColor: '#E21320'}}>
    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#E21320', padding: 10}}>
      <Text style={{fontFamily: 'AvengeanceHeroicAvengerBoldItalic',fontSize: 30,  color: '#fff'}}>Busca Marvel</Text>
      <TouchableOpacity onPress={()=>setvisibleSearch(!visibleSearch)} style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center'}}>
      <Icon
        name="search"
        size={20}
        color="#fff"
      />
      </TouchableOpacity>
      </View>
       {visibleSearch ? <View style={{width:'80%', margin: 10}}>
        <TextInput style={{borderRadius: 45, borderColor: 'red', borderWidth: 0.5, height: 50, fontSize: 16, backgroundColor: '#fff'}} placeholder="Buscar Personagem"
          onChangeText={(text) => console.log(text)}/>
      </View> : null}
      <View style={{backgroundColor: '#E21320', width: screenWidth, height: 5, flexDirection: 'row', alignItems: 'center' ,justifyContent: 'space-around' }} />
      <ScrollView  horizontal={true}>
      {isLoading ? <ActivityIndicator color='white'/> :
       <FlatList data={heroes} keyExtractor={item => item.id} renderItem={renderItem} /> }
      </ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#E21320', width: '100%', padding: 5}}>
      {offset === 0 ? null : <TouchableOpacity style={styles.button} onPress={() => setOffset(offset - 10)}><Text style={styles.text}>ANTERIORES</Text></TouchableOpacity>}
      <TouchableOpacity style={styles.button} onPress={() => setOffset(offset + 10)}><Text style={styles.text}>CARREGAR  MAIS</Text></TouchableOpacity>
      </View>
    </View>);
};

export default MarvelHeroes;


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 45,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
    fontFamily: 'AvengeanceHeroicAvengerBoldItalic',
  },
});
