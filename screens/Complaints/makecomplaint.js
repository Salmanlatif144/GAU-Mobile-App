import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {globalstyles} from '../../stylesheet';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Makecomplaint(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open4, setOpen4] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Choose Date');
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');

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
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleOpen3 = () => {
    setOpen3(true);
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

        <View style={globalstyles.coldash}>
          <Text style={globalstyles.bigwhitetextdash}>
            {' '}
            <Image
              source={require('../../assets/cloud.png')}
              style={globalstyles.icons}
            />{' '}
            Make Complaint
          </Text>
          <Text style={globalstyles.whitetextdash}>
            Fill in the data to add Complaint. It will take a couple of minutes.{' '}
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
            <Text style={globalstyles.simpletext}>Select Date</Text>
            <TouchableOpacity
              style={globalstyles.input2}
              onPress={() => setOpen4(true)}>
              <Text style={globalstyles.smalltext}>{selectedDate}</Text>
            </TouchableOpacity>

            <DatePicker
              modal
              open={open4}
              date={date}
              onConfirm={date => {
                setOpen4(false);
                setDate(date);
                setSelectedDate(` ${date.toLocaleDateString()}`);
              }}
              onCancel={() => {
                setOpen4(false);
              }}
            />
          </View>
          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Issue Title</Text>
            <TextInput
              style={globalstyles.input2}
              placeholder="Enter Issue Title"
              placeholderTextColor="grey"
              value={issue}
              onChangeText={setIssue}
            />
          </View>
          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Issue Description</Text>
            <TextInput
              style={globalstyles.input2}
              placeholder="Enter Issue Discription"
              placeholderTextColor="grey"
              value={description}
              onChangeText={setDescription}
            />
          </View>
          <View style={globalstyles.btncont}>
            <TouchableOpacity style={globalstyles.cancel}>
              <Text style={globalstyles.canceltext}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={globalstyles.confirm}
              onPress={() => {
                props.navigation.navigate('ViewComplaints');
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
