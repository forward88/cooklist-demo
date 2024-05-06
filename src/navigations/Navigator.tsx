import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../CLTypes';
import {CL_PAGES} from '../utils/constants';
import {HomeScreen} from '../screens/Home/Home';
import {DetailsScreen} from '../screens/Details/Details';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={CL_PAGES.home}>
        <Stack.Screen name={CL_PAGES.home} component={HomeScreen} />
        <Stack.Screen name={CL_PAGES.details} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
