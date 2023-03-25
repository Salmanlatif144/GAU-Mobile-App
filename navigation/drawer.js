import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import Dashboard from '../screens/dashboard';
import Appointments from '../screens/appointments';
import Donations from '../screens/donations';
import Complaints from '../screens/complaints';
import Makecomplaint from '../screens/Complaints/makecomplaint';
import Viewcomplaints from '../screens/Complaints/viewcomplaints';
import Viewdonations from '../screens/Donations/viewdonations';
import Makedonation from '../screens/Donations/makedonation';
import Makeappointment from '../screens/Appointments/makeappointment';
import Viewappointments from '../screens/Appointments/viewappointments';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Bottomtab from './bottomtab';

const Drawer = createDrawerNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Appointments"
        component={Appointments}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Complaints"
        component={Complaints}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Donations"
        component={Donations}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ComplaintStack() {
  return (
    <Stack.Navigator initialRouteName="Makecomplaints">
      <Stack.Screen
        name="MakeComplaint"
        component={Makecomplaint}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewComplaints"
        component={Viewcomplaints}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function DonationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MakeDonation"
        component={Makedonation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewDonation"
        component={Viewdonations}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function AppointmentStack() {
  return (
    <Stack.Navigator initialRouteName="MakeAppointment">
      <Stack.Screen
        name="MakeAppointment"
        component={Makeappointment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ViewAppointment"
        component={Viewappointments}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function Drawerr() {
  return (
    <Bottomtab>
      <Drawer.Navigator>
        <Drawer.Screen name="DashboardStack" component={DashboardStack} />
        <Drawer.Screen name="AppointmentStack" component={AppointmentStack} />
        <Drawer.Screen name="DonationStackm" component={DonationStack} />
        <Drawer.Screen name="ComplaintStack" component={ComplaintStack} />
      </Drawer.Navigator>
    </Bottomtab>
  );
}

const styles = StyleSheet.create({});
