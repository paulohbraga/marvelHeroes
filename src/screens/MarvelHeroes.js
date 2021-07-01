/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ApplicationContext from '../context/ApplicationContext';
import { Separator } from '../components/Separator';
import { styles } from '../styles/styles';
import { COLORS } from '../assets/constants';
export const screenWidth = Dimensions.get('window').width;

const MarvelHeroes = ({ navigation }) => {

  const {
    getHeroes,
    heroes,
    offset,
    setOffset,
    isLoading,
    SearchHero,
  } = useContext(ApplicationContext);
  const [visibleSearch, setvisibleSearch] = useState(false);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    getHeroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes do herói', { item: item })} style={styles.card}>
      <View style={styles.container}>
        <Image source={{
          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }}
          style={styles.miniImg}
        />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.heroName}>{item.name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };


  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchContainerInternal}>
        <Text style={styles.mainLabel}>Busca Marvel</Text>
        <TouchableOpacity onPress={() => setvisibleSearch(!visibleSearch)} style={styles.buttonSearch}>
          <Icon
            name="search"
            size={20}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
      {visibleSearch ? <View style={styles.containerS}>
        <TextInput clearButtonMode="always" style={styles.inputsearch} placeholder="Buscar Herói"
          value={textSearch}
          onChangeText={(text) => setTextSearch(text)}
          onSubmitEditing={() => SearchHero(textSearch)}
        />
        <TouchableOpacity
          style={styles.clearInput}
          onPress={() => {
            setTextSearch(null);
            getHeroes();
          }}>
          <Icon
            name="close"
            size={20}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View> : null}
      <Separator screenWidth={screenWidth} />
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {isLoading ? <ActivityIndicator color="white" />
          : heroes.length > 0 ? <FlatList showsVerticalScrollIndicator={false} data={heroes} keyExtractor={item => item.id} renderItem={renderItem} />
          : <View style={styles.notFoundContainer}><Text style={styles.notFoundText}>HERÓI NÃO ENCONTRADO</Text></View>}
      </ScrollView>
      <View style={styles.listContainer}>
        {offset === 0 ? null :
        <TouchableOpacity style={styles.button}
          onPress={() => setOffset(offset - 10)}>
            <Text style={styles.text}>
            {'<<<'}
            </Text>
        </TouchableOpacity>}
        <TouchableOpacity style={styles.button}
          onPress={() => setOffset(offset + 10)}>
            <Text style={styles.text}>
            {'>>>'}
            </Text>
        </TouchableOpacity>
      </View>
    </View>);
};

export default MarvelHeroes;
