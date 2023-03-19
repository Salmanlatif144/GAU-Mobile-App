import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {globalstyles} from '../stylesheet';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextInput} from 'react-native-gesture-handler';
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';

export default function Signup(props) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [code, setCode] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [cPassword, setcPassword] = useState(false);
  const [signup, setsignup] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSignup = () => {
    if (!name || !code || !mobile || !email || !password || !cpassword) {
      setShowAlert(true);
      return;
    }

    if (
      !/^(?=.*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9].*[A-Za-z0-9]).{8,}$/.test(
        password,
      )
    ) {
      setshowPassword(true);
      return;
    }

    if (password !== cpassword) {
      setcPassword(true);
      return;
    }

    setsignup(true);
    props.navigation.navigate('Login');
    setName('');
    setEmail('');
    setPassword('');
    setCpassword('');
    setMobile('');
    setCode('');
  };

  const handleHideAlert = () => {
    setShowAlert(false);
  };
  const handlePassword = () => {
    setshowPassword(false);
  };
  const handlecPassword = () => {
    setcPassword(false);
  };
  const handlesignup = () => {
    setsignup(false);
    // props.navigation.navigate('Login');
  };

  return (
    <View style={styles.maincont}>
      <View style={globalstyles.loginpiccont}>
        <Image
          source={require('../assets/try2.jpg')}
          style={globalstyles.loginpic}
        />
      </View>
      <Text style={globalstyles.bigtextlogin}>Signup</Text>
      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onOpen={handleOpen}
          placeholder="Select User"
          placeholderTextColor="grey"
          style={globalstyles.input}
          containerStyle={{
            width: responsiveWidth(80),
            alignSelf: 'center',
            marginBottom: open ? responsiveHeight(5) : 0,
            paddingTop: open ? responsiveHeight(2) : 0,
          }}
        />
      </View>
      <ScrollView>
        <TextInput
          style={globalstyles.input}
          placeholder="Enter Your Full Name"
          placeholderTextColor="grey"
          value={name}
          onChangeText={setName}
          required={true}
        />
        <TextInput
          style={globalstyles.input}
          placeholder="Enter Your Mobile Number"
          placeholderTextColor="grey"
          value={mobile}
          onChangeText={setMobile}
          required={true}
          keyboardType="phone-pad"
        />
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
        <TextInput
          style={globalstyles.input}
          placeholder="Please Confirm Password"
          placeholderTextColor="grey"
          value={cpassword}
          onChangeText={setCpassword}
          required={true}
          secureTextEntry={true}
        />
        <TextInput
          style={globalstyles.input}
          placeholder="Enter  Verification Code"
          placeholderTextColor="grey"
          value={code}
          onChangeText={setCode}
          required={true}
        />

        <TouchableOpacity
          style={globalstyles.loginbutton}
          onPress={handleSignup}>
          <Text style={globalstyles.logintext}>SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalstyles.logintextcont}
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <Text style={globalstyles.simpletext}>
            Already have an account?{' '}
            <Text style={globalstyles.bluetext}>Login here</Text>{' '}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <PopupDialog
        visible={showAlert}
        dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}
        onTouchOutside={handleHideAlert}>
        <View style={globalstyles.alert}>
          <Text style={globalstyles.alertTitle}>Warning</Text>
          <Text style={globalstyles.alertMessage}>
            Please fill out all fields.
          </Text>

          <TouchableOpacity
            style={globalstyles.alertButton}
            onPress={() => setShowAlert(false)}>
            <Text style={globalstyles.alertButtonText}>Okay</Text>
          </TouchableOpacity>
        </View>
      </PopupDialog>
      <PopupDialog
        visible={showPassword}
        dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}
        onTouchOutside={handlePassword}>
        <View style={globalstyles.alert}>
          <Text style={globalstyles.alertTitle}>Warning</Text>
          <Text style={globalstyles.alertMessage}>
            Password must contain 8 alphabets.
          </Text>
          <TouchableOpacity
            style={globalstyles.alertButton}
            onPress={handlePassword}>
            <Text style={globalstyles.alertButtonText}>Okay</Text>
          </TouchableOpacity>
        </View>
      </PopupDialog>
      <PopupDialog
        visible={cPassword}
        dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}
        onTouchOutside={handlecPassword}>
        <View style={globalstyles.alert}>
          <Text style={globalstyles.alertTitle}>Warning</Text>
          <Text style={globalstyles.alertMessage}>
            Password and confirm Password must be same.
          </Text>
          <TouchableOpacity
            style={globalstyles.alertButton}
            onPress={handlecPassword}>
            <Text style={globalstyles.alertButtonText}>Okay</Text>
          </TouchableOpacity>
        </View>
      </PopupDialog>
      <PopupDialog
        visible={signup}
        dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}
        onTouchOutside={handlesignup}>
        <View style={globalstyles.alert}>
          <Text style={globalstyles.successalertTitle}>Congartulations</Text>
          <Text style={globalstyles.alertMessage}>Now please login.</Text>
          <TouchableOpacity
            style={globalstyles.alertButton}
            onPress={handlesignup}>
            <Text style={globalstyles.alertButtonText}>Okay</Text>
          </TouchableOpacity>
        </View>
      </PopupDialog>
    </View>
  );
}

const styles = StyleSheet.create({
  maincont: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
});
