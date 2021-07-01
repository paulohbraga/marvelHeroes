import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MarvelHeroes from './screens/MarvelHeroes';
import HeroDetails from './screens/HeroDetails';
import {COLORS} from './assets/constants';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    height: 45,
    elevation: 0,
    backgroundColor: COLORS.red,
  },
  headerTintColor: COLORS.white,
  headerTitleStyle: {
    fontFamily: 'Marvel-Regular',
  },
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
          <Stack.Screen name="Detalhes do herói" component={HeroDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
