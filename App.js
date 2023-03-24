import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './screens/main';
import Login from './screens/login';
import Signup from './screens/signup';
import Schedule from './screens/schedule';
import Dashboard from './screens/dashboard';
import Bottomtab from './navigation/bottomtab';
import Appointments from './screens/appointments';
import Complaints from './screens/complaints';
import Donations from './screens/donations';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={Bottomtab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

// <Stack.Screen name="Dashboard" component={Dashboard} />
//         <Stack.Screen name="Appointments" component={Appointments} />
//         <Stack.Screen name="Complaints" component={Complaints} />
//         <Stack.Screen name="Donations" component={Donations} />

// <Stack.Screen name="Main" component={Main} />
// <Stack.Screen name="Login" component={Login} />
// <Stack.Screen name="Signup" component={Signup} />
// <Stack.Screen name="Schedule" component={Schedule} />
