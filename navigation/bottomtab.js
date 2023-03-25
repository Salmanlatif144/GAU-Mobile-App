import {View, Text, Image, Button} from 'react-native';
import React, {useState} from 'react';
// import Schedule from './screens/schedule';
// import Dashboard from './screens/dashboard';
import Schedule from '../screens/schedule';
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
import {useTheme} from 'react-native-paper';
import Modal from 'react-native-modal';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainDash"
        component={Dashboard}
        options={{headerShown: false}}
      />
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
    <Stack.Navigator>
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
    <Stack.Navigator initialRouteName="MakeDonation">
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

// function ModalTester() {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <View
//       style={{
//         // backgroundColor: 'red',
//         height: responsiveHeight(80),
//         justifyContent: 'flex-end',
//         marginBottom: responsiveHeight(25),
//       }}>
//       <Makecomplaint />
//       <Button title="Show modal" onPress={toggleModal} />

//       <Modal isVisible={isModalVisible}>
//         <View style={{backgroundColor: 'red', height: responsiveHeight(50)}}>
//           <Text>Hello!</Text>

//           <Button title="Hide modal" onPress={toggleModal} />
//         </View>
//       </Modal>
//     </View>
//   );
// }

export default function Bottomtab() {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';

  return (
    <Tab.Navigator
      initialRouteName="MainDash"
      labeled={false}
      barStyle={{
        backgroundColor: '#3268A7',
        position: 'absolute',
        overflow: 'hidden',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        height: responsiveHeight(9),
        // alignItems: 'center',
        paddingHorizontal: 25,
        justifyContent: 'center',
      }}>
      <Tab.Screen
        name="MainDash"
        component={DashboardStack}
        tabBarColor="red"
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 40,

                alignItems: 'center',
                borderBottomColor: '#fff',
                borderBottomWidth: focused ? 4 : 0,

                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/dashboardicon.png')}
                style={{
                  tintColor: focused ? '#fff' : '#B6B6B6',
                  // marginRight: 5,
                  marginBottom: 5,
                }}
                accessibilityIgnoresInvertColors={true}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={AppointmentStack}
        options={{
          // tabBarColor: 'blue',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 40,

                alignItems: 'center',
                borderBottomColor: '#fff',
                borderBottomWidth: focused ? 4 : 0,

                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/appointmentsicon.png')}
                style={{
                  tintColor: focused ? '#fff' : '#B6B6B6',
                  // marginRight: 5,
                  marginBottom: 5,
                }}
                accessibilityIgnoresInvertColors={true}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Donations"
        component={DonationStack}
        options={{
          // tabBarColor: 'blue',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 40,

                alignItems: 'center',
                borderBottomColor: '#fff',
                borderBottomWidth: focused ? 4 : 0,

                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/donationicon.png')}
                style={{
                  tintColor: focused ? '#fff' : '#B6B6B6',
                  // marginRight: 5,
                  marginBottom: 5,
                }}
                accessibilityIgnoresInvertColors={true}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Complaints"
        component={ComplaintStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 40,

                alignItems: 'center',
                borderBottomColor: '#fff',
                borderBottomWidth: focused ? 4 : 0,

                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/complainticon.png')}
                style={{
                  tintColor: focused ? '#fff' : '#B6B6B6',
                  // marginRight: 5,
                  marginBottom: 5,
                }}
                accessibilityIgnoresInvertColors={true}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Dashboard}
        options={{
          // tabBarColor: 'blue',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 40,

                alignItems: 'center',
                borderBottomColor: '#fff',
                borderBottomWidth: focused ? 4 : 0,

                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/settingicons.png')}
                style={{
                  tintColor: focused ? '#fff' : '#B6B6B6',
                  // marginRight: 5,
                  marginBottom: 5,
                }}
                accessibilityIgnoresInvertColors={true}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
