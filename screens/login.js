import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, {useState} from 'react';
import {globalstyles} from '../stylesheet';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <View style={styles.maincont}>
      <View style={globalstyles.loginpiccont}>
        <Image
          source={require('../assets/try2.jpg')}
          style={globalstyles.loginpic}
        />
      </View>
      <Text style={globalstyles.bigtextlogin}>Login</Text>
      <TextInput
        style={globalstyles.input}
        placeholder="Enter Your Email Id"
        placeholderTextColor="grey"
        value={email}
        onChangeText={setEmail}
        required={true}
      />
      <TextInput
        style={globalstyles.input}
        placeholder="Enter Your Password"
        placeholderTextColor="grey"
        value={password}
        onChangeText={setPassword}
        required={true}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={globalstyles.loginbutton}
        onPress={() => {
          props.navigation.navigate('Schedule');
        }}>
        <Text style={globalstyles.logintext}>Login</Text>
      </TouchableOpacity>
      <View style={styles.textcont}>
        <BouncyCheckbox
          style={{marginTop: 16}}
          isChecked={checkboxState}
          text="Remember me"
          disableBuiltInState
          onPress={() => setCheckboxState(!checkboxState)}
          fillColor="#3268A7"
          textStyle={{
            color: '#3268A7',
            fontWeight: '500',
          }}
          size={18}
        />
        <TouchableOpacity>
          <Text style={styles.greytext}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.text}>Login with social account</Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={styles.googlebutton}>
        <Image
          source={require('../assets/google.png')}
          style={{marginHorizontal: 15}}
        />
        <Text style={globalstyles.simpletext}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalstyles.logintextcont}
        onPress={() => {
          props.navigation.navigate('Signup');
        }}>
        <Text style={styles.simpletext}>
          Don't have an account?{' '}
          <Text style={globalstyles.bluetext}>Register</Text>{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  maincont: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },

  firsttext: {
    color: 'black',
  },
  greytext: {
    color: '#7C7D81',
    fontSize: RFPercentage(1.7),
    marginTop: 16,
  },
  textcont: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'green',
    justifyContent: 'space-between',
    width: responsiveWidth(80),
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
    width: responsiveWidth(80),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#7C7D81',
  },
  text: {
    marginHorizontal: 8,
    fontSize: 14,
    color: '#7C7D81',
  },
  googlebutton: {
    flexDirection: 'row',
    width: responsiveWidth(80),
    borderColor: '#7C7D81',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    height: 40,
    borderRadius: 10,
    marginTop: responsiveHeight(1.5),
  },
  simpletext: {
    color: '#3268A7',
    fontSize: RFPercentage(2),
    fontWeight: '400',
  },
});

// <View>
// <Recaptcha
//   ref={recaptcha}
//   siteKey="<your-recaptcha-public-key>"
//   baseUrl="http://my.domain.com"
//   onVerify={onVerify}
//   onExpire={onExpire}
//   size="invisible"
// />
// <Button title="Send" onPress={send} />
// </View>
