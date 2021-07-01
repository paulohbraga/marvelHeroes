/* eslint-disable prettier/prettier */
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
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
  const [textSearch, setTextSearch] = useState('');

  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes do herói', {item: item})} style={{backgroundColor: 'white', elevation: 2, borderWidth: 1.5, borderRadius: 10, borderColor: '#000', margin: 5, height: 120, width: screenWidth - 40,justifyContent:  'space-between', alignContent: 'space-around',alignItems: 'center', flexDirection: 'row'}}>
      <View style={{width: 100, marginLeft: 30}}>

      <Image source={{
        uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }}
      style={{width: 100, height: 100, borderRadius: 50, borderWidth: 1, borderColor: '#000'}}
      />
      </View>
      <View style={{width: '50%'}}>

      <Text style={{fontFamily:'Marvel-Regular', fontSize: 20 }}>{item.name.toUpperCase()}</Text>
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
    SearchHero,
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
       {visibleSearch ? <View style={{ margin: 10, flexDirection:'row',alignItems: 'center', justifyContent:'center', alignContent: 'center', }}>
        <TextInput clearButtonMode="always" style={{width: '80%',   borderRadius: 45, borderColor: 'red', borderWidth: 0.5, height: 50, fontSize: 16, backgroundColor: '#fff'}} placeholder="Buscar Personagem"
          value={textSearch}
          onChangeText={(text) => setTextSearch(text)}
          onSubmitEditing={()=> SearchHero(textSearch)}
        />
        <TouchableOpacity
        style={{height: 50, width: 50, justifyContent: 'center', alignItems: 'center'}}
        onPress={() => {
          setTextSearch(null);
          getHeroes();
        }}>
        <Icon
        name="close"
        size={20}
        color="#fff"
      />
</TouchableOpacity>
      </View> : null}
      <View style={{backgroundColor: 'yellow', width: screenWidth, height: 5, flexDirection: 'row', alignItems: 'center' ,justifyContent: 'space-around', borderColor:'#000', borderTopWidth: 1, borderBottomWidth: 1 }} />
      <ScrollView  horizontal={true}  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      {isLoading ? <ActivityIndicator color='white'/> :
       heroes.length > 0 ? <FlatList showsVerticalScrollIndicator={false} data={heroes} keyExtractor={item => item.id} renderItem={renderItem} /> : <View style={{justifyContent: 'center', alignItems: 'center'}}><Text style={{fontFamily: 'Marvel-Regular', fontSize: 20}}>HEROI NAO ENCONTRADO</Text></View> }
      </ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#E21320', width: '100%', padding: 5}}>
      {offset === 0 ? null : <TouchableOpacity style={styles.button} onPress={() => setOffset(offset - 10)}><Text style={styles.text}> {'<<<'} </Text></TouchableOpacity>}
      <TouchableOpacity style={styles.button} onPress={() => setOffset(offset + 10)}><Text style={styles.text}> {'>>>'} </Text></TouchableOpacity>
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
    fontFamily:'Marvel-Regular',
  },
});
