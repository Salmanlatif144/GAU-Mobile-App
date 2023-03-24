import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {globalstyles} from '../stylesheet';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default function Main(props) {
  return (
    <View style={styles.main_cont}>
      <View style={styles.imgcont}>
        <Image source={require('../assets/ss.jpg')} style={styles.mainimg} />
      </View>
      <View style={styles.textcont}>
        <Text style={globalstyles.bigtext}>
          Welcome to <Text style={globalstyles.redtext}>GAU</Text>
        </Text>
        <Text style={styles.greytext}>
          The best and trustworthy NGO to help those who need
        </Text>
      </View>
      <Image source={require('../assets/Dots.png')} />
      <View style={styles.buttoncont}>
        <TouchableOpacity
          style={styles.loginbutton}
          onPress={() => {
            props.navigation.replace('Login');
          }}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerbutton}
          onPress={() => {
            props.navigation.navigate('Signup');
          }}>
          <Text style={styles.registertext}>Register</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.googlebutton}>
        <Image
          source={require('../assets/google.png')}
          style={{marginHorizontal: 15}}
        />
        <Text style={globalstyles.simpletext}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main_cont: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imgcont: {
    width: responsiveWidth(100),
    alignItems: 'center',
    marginTop: responsiveHeight(4),
    height: responsiveHeight(40),
    overflow: 'hidden',
  },
  mainimg: {
    flex: 1,
    resizeMode: 'contain',
  },
  greytext: {
    color: '#7C7D81',
    fontSize: RFPercentage(2.1),
    textAlign: 'center',
    marginTop: 5,
  },
  textcont: {
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(75),
    padding: responsiveHeight(3),
    marginTop: responsiveHeight(2),
  },
  buttoncont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: responsiveHeight(3),
  },
  loginbutton: {
    width: responsiveWidth(35),
    height: 55,
    borderRadius: 30,
    borderColor: '#3268A7',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  logintext: {
    color: '#3268A7',
    fontWeight: 'bold',
    fontSize: RFPercentage(2.5),
  },
  registerbutton: {
    backgroundColor: '#3268A7',
    width: responsiveWidth(35),
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registertext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: RFPercentage(2.5),
  },
  googlebutton: {
    flexDirection: 'row',
    width: responsiveWidth(70),
    borderColor: '#EBEBEB',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 50,
    borderRadius: 30,
    marginTop: responsiveHeight(2),
  },
});
