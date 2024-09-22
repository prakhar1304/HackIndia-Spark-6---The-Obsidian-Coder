import * as React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../screen/Home/Home';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import Profile from '../../screen/Profile/Profile';
import Detailed from '../../screen/Detail/Detailed';
import BottomSheetPage from '../../components/bottomSheet/BottomSheetPage';



const Stack = createNativeStackNavigator();


function AppNavigation() {

  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{ animation: 'slide_from_bottom' }}
      />
      
      <Stack.Screen name="home" component={Home}
        options={{ animation: 'slide_from_bottom' }}
      />
      <Stack.Screen name='profile' component={Profile}
        options={{ animation: 'slide_from_bottom' }}
      />
      <Stack.Screen name='Detailed' component={Detailed}
        options={{ animation: 'slide_from_bottom' }}
      />
      <Stack.Screen name='BottomSheetPage' component={BottomSheetPage}
        options={{ animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>



  );
}

export default AppNavigation;