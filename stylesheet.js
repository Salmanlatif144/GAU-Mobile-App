import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  // RFPercentage,
} from 'react-native-responsive-dimensions';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const globalstyles = StyleSheet.create({
  simpletext: {
    color: 'black',
    fontSize: RFPercentage(2),
    fontWeight: '400',
  },
  bigtext: {
    color: 'black',
    fontSize: responsiveHeight(4),
    fontWeight: 'bold',
    // fontFamily: 'Inter-ExtraLight',
  },
  redtext: {
    color: '#CF1E1C',
    fontSize: responsiveHeight(4),
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
    fontSize: responsiveHeight(4.5),
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
    // height: 40,
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
    fontSize: responsiveHeight(2),
    fontWeight: '700',
  },
  bluetext: {
    color: '#3268A7',
    fontWeight: 'bold',
    fontSize: responsiveHeight(2),
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
    fontSize: responsiveHeight(3),
    fontWeight: 'bold',
    marginBottom: 5,
    // color: '#3b0911'
    color: '#7a1f2c',
  },
  successalertTitle: {
    fontSize: responsiveHeight(3),
    fontWeight: 'bold',
    marginBottom: 5,
    // color: '#3b0911'
    color: '#3268A7',
  },
  alertMessage: {
    fontSize: responsiveHeight(2),
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
    fontSize: responsiveHeight(1.9),
  },
  //schedule payment
  bluecont: {
    flex: 1,
    backgroundColor: '#3268A7',
  },
  rowcont: {
    flexDirection: 'row',

    width: responsiveWidth(100),
    height: responsiveHeight(18),
    marginTop: responsiveHeight(3),
  },
  col1: {
    width: responsiveWidth(20),
    height: responsiveHeight(14),
    justifyContent: 'space-around',
    padding: 15,
  },
  col2: {
    width: responsiveWidth(60),
    height: responsiveHeight(16),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  col3: {
    width: responsiveWidth(20),
    height: responsiveHeight(14),
    justifyContent: 'space-around',
    padding: 15,
  },
  bigwhitetext: {
    fontSize: RFPercentage(3.1),
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
  whitetext: {
    fontSize: RFPercentage(1.3),
    color: '#fff',
    textAlign: 'center',
    fontWeight: '300',
  },
  iconm: {marginLeft: 15, marginTop: 10},
  icons: {height: 10, width: 30, resizeMode: 'contain'},
  iconl: {height: 20, width: 60},
  whitecont: {
    backgroundColor: '#fff',
    flex: 1,
    width: responsiveWidth(100),
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    alignItems: 'center',
  },
  lightwhitecont: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    marginTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(8),
    borderRadius: 25,
  },
  input2: {
    width: responsiveWidth(80),
    maxHeight: 20,
    alignSelf: 'center',
    paddingHorizontal: 5,
    minHeight: 35,
    borderColor: '#fff',
    borderBottomColor: '#E2E4E5',
    borderBottomWidth: 2,

    borderWidth: 1,
    borderRadius: 8,
    marginTop: responsiveHeight(0.5),
    color: 'black',
    backgroundColor: '#fff',
    // textAlign: 'center',
    justifyContent: 'center',
  },
  inputcont: {
    marginTop: responsiveHeight(2),
  },
  btncont: {
    flexDirection: 'row',
    marginTop: responsiveHeight(4),
  },
  cancel: {
    height: 35,
    borderColor: 'red',
    borderWidth: 1,
    width: responsiveWidth(28),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  canceltext: {
    color: 'red',
    fontSize: RFPercentage(2),
    fontWeight: '400',
  },
  confirm: {
    height: 35,
    borderColor: 'green',
    borderWidth: 1,
    width: responsiveWidth(28),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: 'green',
  },
  confirmtext: {
    color: '#fff',
    fontSize: RFPercentage(2),
    fontWeight: '400',
  },
  //dashboard
  coldash: {
    width: responsiveWidth(60),
    height: responsiveHeight(16),
    justifyContent: 'flex-end',
    alignItems: 'center',

    top: responsiveHeight(-2),
  },
  bigwhitetextdash: {
    fontSize: RFPercentage(3.6),
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    marginRight: responsiveWidth(4),
  },
  whitetextdash: {
    fontSize: RFPercentage(1.6),
    color: '#fff',
    textAlign: 'center',
    fontWeight: '300',
  },
  drawericon: {
    marginTop: responsiveHeight(2),
    marginLeft: responsiveHeight(2),
  },
  logo: {height: 55, width: 50},
  lightwhitecontdash: {
    backgroundColor: '#F9F9F9',
    // backgroundColor: 'red',
    padding: 10,
    marginTop: responsiveHeight(2),
    // paddingBottom: responsiveHeight(10),
    marginBottom: responsiveHeight(9),
    borderRadius: 25,
    width: responsiveWidth(85),
    textAlign: 'center',
  },
  //card
  dashcard: {
    width: responsiveWidth(60),
    backgroundColor: '#fff',
    // height: responsiveHeight(16),
    marginTop: responsiveHeight(2),
    borderRadius: 15,
    alignSelf: 'center',
  },
  cardpiccont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardsimpletext: {
    color: 'black',
    fontSize: RFPercentage(2.5),
    fontWeight: '600',
  },
  cardsmalltext: {
    color: 'black',
    fontSize: RFPercentage(1.7),
    fontWeight: '700',
    marginTop: responsiveHeight(0.5),
  },
  cardminicont: {
    padding: 10,
    justifyContent: 'space-between',
  },
  cardboldtext: {
    color: 'black',
    fontSize: RFPercentage(3.5),
    fontWeight: 'bold',
    marginTop: responsiveHeight(1),
  },
  progresstext: {
    color: 'black',
    fontSize: RFPercentage(2.5),
    fontWeight: '600',
    textAlign: 'right',
    marginRight: 30,
  },
  graphcont: {
    // backgroundColor: 'red',
    // width: responsiveWidth(100),
    marginTop: responsiveHeight(2),
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: responsiveHeight(9),
  },
  whitecont2: {
    backgroundColor: '#fff',
    flex: 1,
    width: responsiveWidth(100),
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    // alignItems: 'center',
    // paddingBottom: 45,
  },
  dashcard2: {
    width: responsiveWidth(60),
    backgroundColor: '#fff',
    // height: responsiveHeight(16),
    marginTop: responsiveHeight(3),
    borderRadius: 15,
    alignSelf: 'center',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    elevation: 5,
  },
  smalltext: {
    color: 'black',
    fontSize: RFPercentage(1.6),
    fontWeight: '400',
  },

  //View donation complaint appointments
  viewcont: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    backgroundColor: '#fff',
    // height: 50,
    width: responsiveWidth(75),
    padding: 5,
    borderRadius: 8,
  },
  viewimgcont: {
    flexDirection: 'row',

    width: responsiveWidth(27),
    alignItems: 'center',
    paddingHorizontal: 2,
    borderRightColor: '#E3E3E3',
    borderRightWidth: 3,
  },
  viewimg: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'contain',
    marginRight: 2,
  },
  viewnametext: {
    color: 'black',
    fontSize: RFPercentage(2),
    fontWeight: 700,
    textAlign: 'center',
  },
  viewnametext2: {
    color: 'black',
    fontSize: RFPercentage(1.5),
    fontWeight: 400,
    textAlign: 'center',
  },
  viewnametext3: {
    color: 'black',
    fontSize: RFPercentage(1.7),
    fontWeight: 800,
    textAlign: 'center',
  },
  viewtextcont: {
    paddingHorizontal: 3,
    borderRightColor: '#E3E3E3',
    borderRightWidth: 3,
    width: responsiveWidth(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewbtncont: {
    paddingHorizontal: 2,
    borderRightColor: '#E3E3E3',
    borderRightWidth: 3,
    width: responsiveWidth(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewredbtn: {
    backgroundColor: '#fcdede',
    padding: 2,
    paddingHorizontal: 4,
    borderRadius: 5,
    width: responsiveWidth(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewredtext: {
    color: '#CF1E1C',
    fontSize: RFPercentage(1.5),
    fontWeight: 400,
  },
  viewgreenbtn: {
    backgroundColor: '#DDF6DD',
    padding: 2,
    paddingHorizontal: 4,
    borderRadius: 5,
    width: responsiveWidth(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewgreentext: {
    color: '#0F7B32',
    fontSize: RFPercentage(1.5),
    fontWeight: 400,
  },
  lastviewcont: {
    paddingHorizontal: 2,

    width: responsiveWidth(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastviewcont2: {
    flexDirection: 'row',
    paddingHorizontal: 2,

    width: responsiveWidth(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 15,
  },
  modaltextmain: {
    color: '#565656',
    fontSize: RFPercentage(3),
    textAlign: 'center',
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 2,
    fontWeight: '700',
  },
  modaltextcont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: responsiveHeight(2),
  },
  modalbtn: {
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
    backgroundColor: '#c8dffa',
    height: 30,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  modalgreentext: {
    color: '#0F7B32',
    fontSize: RFPercentage(1.9),
    fontWeight: '600',
  },
  modalredtext: {
    color: 'red',
    fontSize: RFPercentage(1.9),
    fontWeight: '600',
  },
  //make donation
  inputgreen: {
    width: responsiveWidth(80),
    maxHeight: 25,
    alignSelf: 'center',
    paddingHorizontal: 5,
    minHeight: 40,
    borderColor: '#0F7B32',
    borderBottomColor: '#0F7B32',
    borderBottomWidth: 3,

    borderWidth: 1,

    marginTop: responsiveHeight(0.5),
    color: '#0F7B32',
    backgroundColor: '#fff',
    // textAlign: 'center',
    justifyContent: 'center',
  },
  donationlinkcont: {
    flexDirection: 'row',
    marginTop: responsiveHeight(0.8),
    // justifyContent: 'center',
    alignItems: 'center',
  },
  donationbluetext: {
    color: '#3268A7',
    fontSize: RFPercentage(2.0),
    fontWeight: '600',
    marginRight: 4,
  },
  multipleinputcont: {
    flexDirection: 'row',
    width: responsiveWidth(75),
    justifyContent: 'space-between',
  },
  donationinput1: {
    width: responsiveWidth(35),
    maxHeight: 20,
    alignSelf: 'center',
    paddingHorizontal: 5,
    minHeight: 35,
    borderColor: '#fff',
    borderBottomColor: '#E2E4E5',
    // borderBottomColor: 'green',
    borderBottomWidth: 3,

    borderWidth: 1,
    borderRadius: 2,
    marginTop: responsiveHeight(0.5),
    color: 'black',
    backgroundColor: '#fff',
    // textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  donationinput2: {
    width: responsiveWidth(20),
    maxHeight: 20,
    alignSelf: 'center',
    paddingHorizontal: 5,
    minHeight: 35,
    borderColor: '#fff',
    borderBottomColor: '#E2E4E5',
    // borderBottomColor: 'green',
    borderBottomWidth: 3,

    borderWidth: 1,
    borderRadius: 2,
    marginTop: responsiveHeight(0.5),
    color: 'black',
    backgroundColor: '#fff',
    // textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  donationinput3: {
    width: responsiveWidth(16),
    maxHeight: 20,
    alignSelf: 'center',
    paddingHorizontal: 5,
    minHeight: 35,
    borderColor: '#fff',
    borderBottomColor: '#E2E4E5',
    // borderBottomColor: 'green',
    borderBottomWidth: 3,

    borderWidth: 1,
    borderRadius: 2,
    marginTop: responsiveHeight(0.5),
    color: 'black',
    backgroundColor: '#fff',
    // textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  inputcontrow: {
    width: responsiveWidth(75),
    marginTop: responsiveHeight(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  donationinput4: {
    width: responsiveWidth(26),

    alignSelf: 'center',
    paddingHorizontal: 5,

    borderColor: '#fff',
    borderBottomColor: '#E2E4E5',

    borderBottomWidth: 3,

    borderWidth: 1,
    borderRadius: 2,
    marginTop: responsiveHeight(0.5),
    color: 'black',
    backgroundColor: '#fff',

    justifyContent: 'center',
    marginBottom: 10,
    height: 35,
  },
  bluetext2: {
    color: '#3268A7',
    fontWeight: 'bold',
    fontSize: responsiveHeight(2),
    marginHorizontal: responsiveWidth(2),
    borderBottomColor: '#E2E4E5',

    borderBottomWidth: 3,
    marginLeft: 10,
  },
  checkgreentext: {
    color: '#0F7B32',
    fontWeight: '500',
    fontSize: RFPercentage(1.8),
    // marginTop: 15,
  },
  checksimpletext: {
    color: 'black',
    fontSize: RFPercentage(1.8),
    fontWeight: '400',
  },
});
