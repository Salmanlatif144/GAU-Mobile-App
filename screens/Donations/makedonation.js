import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {globalstyles} from '../../stylesheet';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Makedonation(props) {
  const [checkboxState, setCheckboxState] = useState(false);
  const [amount, setamount] = useState('');
  const [expiration, setExpiration] = useState('');
  const [employee, setEmployee] = useState('');
  const [cvc, setCvc] = useState('');

  return (
    <View style={globalstyles.bluecont}>
      <View style={globalstyles.rowcont}>
        <View style={globalstyles.col1}>
          <Image
            source={require('../../assets/logo.png')}
            style={globalstyles.logo}
          />
          <TouchableOpacity>
            <Image
              source={require('../../assets/drawer.png')}
              style={globalstyles.drawericon}
            />
          </TouchableOpacity>
        </View>

        <View style={globalstyles.coldash}>
          <Text style={globalstyles.bigwhitetextdash}>
            {' '}
            <Image
              source={require('../../assets/cloud.png')}
              style={globalstyles.icons}
            />{' '}
            View Donations
          </Text>
          <Text style={globalstyles.whitetextdash}>
            View list of all Donations
          </Text>
        </View>
        <View style={globalstyles.col3}>
          <Image
            source={require('../../assets/cloud.png')}
            style={globalstyles.iconl}
          />
          <Image
            source={require('../../assets/cloud.png')}
            style={globalstyles.icons}
          />
        </View>
      </View>
      <View style={globalstyles.whitecont}>
        <ScrollView style={globalstyles.lightwhitecont}>
          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Enter Amount</Text>
            <TextInput
              style={globalstyles.inputgreen}
              placeholder="Enter Amount"
              placeholderTextColor="green"
              value={amount}
              onChangeText={setamount}
            />
          </View>
          <TouchableOpacity style={globalstyles.donationlinkcont}>
            <Text style={globalstyles.donationbluetext}>
              Autofill card with this link
            </Text>
            <Image source={require('../../assets/arrow.png')} />
          </TouchableOpacity>
          <View style={globalstyles.multipleinputcont}>
            <View style={globalstyles.inputcont}>
              <Text style={globalstyles.simpletext}>Select Employee</Text>
              <TextInput
                style={globalstyles.donationinput1}
                placeholder="Select Employee"
                placeholderTextColor="grey"
                value={employee}
                onChangeText={setEmployee}
              />
            </View>
            <View style={globalstyles.inputcont}>
              <Text style={globalstyles.simpletext}>Expiration</Text>
              <TextInput
                style={globalstyles.donationinput2}
                placeholder="MM/YY"
                placeholderTextColor="grey"
                value={expiration}
                onChangeText={setExpiration}
              />
            </View>
            <View style={globalstyles.inputcont}>
              <Text style={globalstyles.simpletext}>CVC</Text>
              <TextInput
                style={globalstyles.donationinput3}
                placeholder="CVC"
                placeholderTextColor="grey"
                value={cvc}
                onChangeText={setCvc}
              />
            </View>
          </View>

          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Country</Text>
            <TextInput
              style={globalstyles.input2}
              placeholder="Pakistan"
              placeholderTextColor="grey"
            />
          </View>

          <View style={globalstyles.inputcontrow}>
            <Text style={globalstyles.simpletext}>Pay:</Text>
            <Text style={globalstyles.bluetext2}>1000</Text>
          </View>

          <View style={globalstyles.inputcontrow}>
            <BouncyCheckbox
              //   style={{marginTop: 16}}
              isChecked={checkboxState}
              //   text="By pressing “Submit” I declare that i’ve read and agree to the GAU ."
              disableBuiltInState
              onPress={() => setCheckboxState(!checkboxState)}
              fillColor="green"
              textStyle={{
                color: '#766464',
                fontWeight: '500',
                fontSize: responsiveFontSize(1.5),
              }}
              size={18}
            />
            <Text style={globalstyles.checksimpletext}>
              By pressing “Submit” I declare that i’ve read and agree to the GAU{' '}
              <Text style={globalstyles.checkgreentext}>
                Terms and Conditions
              </Text>
            </Text>
          </View>
          <View style={globalstyles.btncont}>
            <TouchableOpacity style={globalstyles.cancel}>
              <Text style={globalstyles.canceltext}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={globalstyles.confirm}
              onPress={() => {
                props.navigation.navigate('ViewDonation');
              }}>
              <Text style={globalstyles.confirmtext}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
