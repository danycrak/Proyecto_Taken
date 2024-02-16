import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import WorkshopScreen from './Workshop';
import SceneScreen from './Scene';
import CharacterScreen from './Character';
import CreateFilmsScreen from './CreateFilms';
import CreateScenesScreen from './CreateScenes';
import CreateCharactersScreen from './CreateCharacters';
import DetailsScreen from './Details';
import ScenesDetailScreen from './ScenesDetail';
import CharactersDetailScreen from './CharactersDetail';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Workshop" component={WorkshopScreen} />
        <Stack.Screen name="Scene" component={SceneScreen} />
        <Stack.Screen name="Character" component={CharacterScreen} />
        <Stack.Screen name="CreateFilms" component={CreateFilmsScreen} /> 
        <Stack.Screen name="CreateScenes" component={CreateScenesScreen} />
        <Stack.Screen name="CreateCharacters" component={CreateCharactersScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ScenesDetail" component={ScenesDetailScreen} />
        <Stack.Screen name="CharactersDetail" component={CharactersDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
