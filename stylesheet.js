import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const globalstyles = StyleSheet.create({
  simpletext: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
  },
  bigtext: {
    color: 'black',
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    // fontFamily: 'Inter-ExtraLight',
  },
  redtext: {
    color: '#CF1E1C',
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
  },
  //signup
  scroll: {
    flex: 1,
  },
  loginpiccont: {
    width: responsiveWidth(100),
    alignItems: 'center',
    height: responsiveHeight(30),
    overflow: 'hidden',
    resizeMode: 'contain',
    borderBottomStartRadius: 35,
    borderBottomEndRadius: 35,
  },
  loginpic: {
    resizeMode: 'contain',
  },
  bigtextlogin: {
    color: '#7C7D81',
    fontSize: responsiveFontSize(4.5),
    fontWeight: 'bold',
    // fontFamily: 'Inter-ExtraLight',
  },
  input: {
    width: responsiveWidth(80),
    maxHeight: 20,
    alignSelf: 'center',
    paddingHorizontal: 5,
    minHeight: 35,
    borderColor: '#7C7D81',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: responsiveHeight(2),
    color: 'black',
  },
  loginbutton: {
    backgroundColor: '#3268A7',
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(80),
    height: 35,
    alignSelf: 'center',
    paddingHorizontal: 5,

    borderRadius: 8,
    marginTop: responsiveHeight(2),
  },
  logintext: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
  },
  bluetext: {
    color: '#3268A7',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    marginHorizontal: responsiveWidth(2),
  },
  logintextcont: {
    marginTop: responsiveHeight(2),
    padding: 2,
  },
  //alert
  alert: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    width: responsiveWidth(50),
  },
  alertTitle: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginBottom: 5,
    // color: '#3b0911'
    color: '#7a1f2c',
  },
  successalertTitle: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginBottom: 5,
    // color: '#3b0911'
    color: '#3268A7',
  },
  alertMessage: {
    fontSize: responsiveFontSize(2),
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
  },
  alertButton: {
    backgroundColor: '#ccdbed',
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
  },
  alertButtonText: {
    color: 'black',
    fontSize: responsiveFontSize(1.9),
  },
});
