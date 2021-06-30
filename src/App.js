import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import MarvelHeroes from './screens/MarvelHeroes';
import HeroDetails from './screens/HeroDetails';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    height: 45,
    elevation: 0,
    backgroundColor: '#E21320',
  },
  headerTintColor: 'rgba(255, 255, 255, 1.0)',
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={screenOptionStyle}
          initialRouteName={'Heróis Marvel'}>
          <Stack.Screen
            options={{headerShown: false}}
            name="Heróis Marvel"
            component={MarvelHeroes}
          />
          <Stack.Screen name="Detalhes" component={HeroDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
