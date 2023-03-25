import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {globalstyles} from '../../stylesheet';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Makeappointment(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(null);

  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [items2, setItems2] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [items3, setItems3] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [items4, setItems4] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleOpen4 = () => {
    setOpen4(true);
  };
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
        <View style={globalstyles.col2}>
          <Text style={globalstyles.bigwhitetext}>
            Schedule the Meeting with Social Worker
          </Text>
          <Text style={globalstyles.whitetext}>
            Schedule the Meeting with Social Worker and get verified
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
        <View style={globalstyles.lightwhitecont}>
          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Employee Type</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onOpen={handleOpen}
              placeholder="Select Worker"
              placeholderTextColor="grey"
              style={globalstyles.input2}
              dropDownDirection="TOP"
              containerStyle={{
                width: responsiveWidth(80),
                alignSelf: 'center',
                backgroundColor: '#fff',
                zIndex: 100,
                // height: open ? responsiveHeight(60) : 35,
              }}
            />
          </View>
          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Select Employee </Text>
            <DropDownPicker
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              onOpen={handleOpen2}
              dropDownDirection="TOP"
              placeholder="Select User"
              placeholderTextColor="grey"
              style={globalstyles.input2}
              containerStyle={{
                width: responsiveWidth(80),
                alignSelf: 'center',
                backgroundColor: '#fff',
                zIndex: 9999,
              }}
            />
          </View>
          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Select Branch</Text>
            <DropDownPicker
              open={open3}
              value={value3}
              items={items3}
              setOpen={setOpen3}
              setValue={setValue3}
              setItems={setItems3}
              onOpen={handleOpen3}
              dropDownDirection="TOP"
              placeholder="Select Branch"
              placeholderTextColor="grey"
              style={globalstyles.input2}
              containerStyle={{
                width: responsiveWidth(80),
                alignSelf: 'center',
                backgroundColor: '#fff',
                zIndex: 9999,
              }}
            />
          </View>
          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Time Slot</Text>
            <DropDownPicker
              open={open4}
              value={value4}
              items={items4}
              setOpen={setOpen4}
              setValue={setValue4}
              setItems={setItems4}
              onOpen={handleOpen4}
              dropDownDirection="TOP"
              placeholder="Select Time Slot"
              placeholderTextColor="grey"
              style={globalstyles.input2}
              containerStyle={{
                width: responsiveWidth(80),
                alignSelf: 'center',
                backgroundColor: '#fff',
                zIndex: 9999,
              }}
            />
          </View>
          <View style={globalstyles.btncont}>
            <TouchableOpacity style={globalstyles.cancel}>
              <Text style={globalstyles.canceltext}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={globalstyles.confirm}
              onPress={() => {
                props.navigation.navigate('ViewAppointment');
              }}>
              <Text style={globalstyles.confirmtext}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
