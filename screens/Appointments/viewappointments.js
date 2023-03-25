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
import DocumentPicker from 'react-native-document-picker';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Modal from 'react-native-modal';

export default function Viewappointments() {
  const [name, setName] = useState('Salman');
  const [type, setType] = useState('Social Worker');
  const [branch, setbranch] = useState('Branch 1');
  const [amount, setamount] = useState('$15000');
  const [time, settime] = useState('12:30');
  const [status, setStatus] = useState('Schedule');
  const [src, setSrc] = useState(require('../../assets/111.jpg'));
  const [date, setDate] = useState('12-3-2023');
  const [appointee, setAppointee] = useState('ABC146');
  const [casee, setCase] = useState('Toyoyta');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [singleFile, setSingleFile] = useState('');
  const [fileName, setFileName] = useState(''); // State variable to hold the file name

  //   const [filename, setfilename] = useState('Upload Document');

  const selectOneFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(JSON.stringify(res));
      const filename = res[0].name;

      console.log('File Name : ' + filename);

      setFileName(filename);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
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
          <View style={globalstyles.viewcont}>
            <View style={globalstyles.viewimgcont}>
              <Image style={globalstyles.viewimg} source={src} />
              <ScrollView>
                <Text style={globalstyles.viewnametext}> {name} </Text>
                <Text style={globalstyles.viewnametext2}> {type} </Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewtextcont}>
              <ScrollView>
                <Text style={globalstyles.viewnametext3}> {branch} </Text>

                <Text style={globalstyles.viewnametext2}>{time}</Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewbtncont}>
              <View
                style={
                  status === 'Schedule'
                    ? globalstyles.viewredbtn
                    : globalstyles.viewgreenbtn
                }>
                <Text
                  style={
                    status === 'Schedule'
                      ? globalstyles.viewredtext
                      : globalstyles.viewgreentext
                  }>
                  {' '}
                  {status}{' '}
                </Text>
              </View>
            </View>
            <View style={globalstyles.lastviewcont2}>
              <TouchableOpacity onPress={toggleModal}>
                <Image source={require('../../assets/View.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal2}>
                <Image source={require('../../assets/Edit.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={globalstyles.viewcont}>
            <View style={globalstyles.viewimgcont}>
              <Image style={globalstyles.viewimg} source={src} />
              <ScrollView>
                <Text style={globalstyles.viewnametext}> {name} </Text>
                <Text style={globalstyles.viewnametext2}> {type} </Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewtextcont}>
              <ScrollView>
                <Text style={globalstyles.viewnametext3}> {branch} </Text>

                <Text style={globalstyles.viewnametext2}>{time}</Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewbtncont}>
              <View
                style={
                  status === 'Pendingg'
                    ? globalstyles.viewredbtn
                    : globalstyles.viewgreenbtn
                }>
                <Text
                  style={
                    status === 'Pendingg'
                      ? globalstyles.viewredtext
                      : globalstyles.viewgreentext
                  }>
                  {' '}
                  {status}{' '}
                </Text>
              </View>
            </View>
            <View style={globalstyles.lastviewcont2}>
              <TouchableOpacity onPress={toggleModal}>
                <Image source={require('../../assets/View.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal2}>
                <Image source={require('../../assets/Edit.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={globalstyles.viewcont}>
            <View style={globalstyles.viewimgcont}>
              <Image style={globalstyles.viewimg} source={src} />
              <ScrollView>
                <Text style={globalstyles.viewnametext}> {name} </Text>
                <Text style={globalstyles.viewnametext2}> {type} </Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewtextcont}>
              <ScrollView>
                <Text style={globalstyles.viewnametext3}> {branch} </Text>

                <Text style={globalstyles.viewnametext2}>{time}</Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewbtncont}>
              <View
                style={
                  status === 'Schedule'
                    ? globalstyles.viewredbtn
                    : globalstyles.viewgreenbtn
                }>
                <Text
                  style={
                    status === 'Schedule'
                      ? globalstyles.viewredtext
                      : globalstyles.viewgreentext
                  }>
                  {' '}
                  {status}{' '}
                </Text>
              </View>
            </View>
            <View style={globalstyles.lastviewcont2}>
              <TouchableOpacity onPress={toggleModal}>
                <Image source={require('../../assets/View.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal2}>
                <Image source={require('../../assets/Edit.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={globalstyles.viewcont}>
            <View style={globalstyles.viewimgcont}>
              <Image style={globalstyles.viewimg} source={src} />
              <ScrollView>
                <Text style={globalstyles.viewnametext}> {name} </Text>
                <Text style={globalstyles.viewnametext2}> {type} </Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewtextcont}>
              <ScrollView>
                <Text style={globalstyles.viewnametext3}> {branch} </Text>

                <Text style={globalstyles.viewnametext2}>{time}</Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewbtncont}>
              <View
                style={
                  status === 'Pendingg'
                    ? globalstyles.viewredbtn
                    : globalstyles.viewgreenbtn
                }>
                <Text
                  style={
                    status === 'Pendingg'
                      ? globalstyles.viewredtext
                      : globalstyles.viewgreentext
                  }>
                  {' '}
                  {status}{' '}
                </Text>
              </View>
            </View>
            <View style={globalstyles.lastviewcont2}>
              <TouchableOpacity onPress={toggleModal}>
                <Image source={require('../../assets/View.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal2}>
                <Image source={require('../../assets/Edit.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={globalstyles.viewcont}>
            <View style={globalstyles.viewimgcont}>
              <Image style={globalstyles.viewimg} source={src} />
              <ScrollView>
                <Text style={globalstyles.viewnametext}> {name} </Text>
                <Text style={globalstyles.viewnametext2}> {type} </Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewtextcont}>
              <ScrollView>
                <Text style={globalstyles.viewnametext3}> {branch} </Text>

                <Text style={globalstyles.viewnametext2}>{time}</Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewbtncont}>
              <View
                style={
                  status === 'Schedule'
                    ? globalstyles.viewredbtn
                    : globalstyles.viewgreenbtn
                }>
                <Text
                  style={
                    status === 'Schedule'
                      ? globalstyles.viewredtext
                      : globalstyles.viewgreentext
                  }>
                  {' '}
                  {status}{' '}
                </Text>
              </View>
            </View>
            <View style={globalstyles.lastviewcont2}>
              <TouchableOpacity onPress={toggleModal}>
                <Image source={require('../../assets/View.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal2}>
                <Image source={require('../../assets/Edit.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={globalstyles.viewcont}>
            <View style={globalstyles.viewimgcont}>
              <Image style={globalstyles.viewimg} source={src} />
              <ScrollView>
                <Text style={globalstyles.viewnametext}> {name} </Text>
                <Text style={globalstyles.viewnametext2}> {type} </Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewtextcont}>
              <ScrollView>
                <Text style={globalstyles.viewnametext3}> {branch} </Text>

                <Text style={globalstyles.viewnametext2}>{time}</Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewbtncont}>
              <View
                style={
                  status === 'Pendingg'
                    ? globalstyles.viewredbtn
                    : globalstyles.viewgreenbtn
                }>
                <Text
                  style={
                    status === 'Pendingg'
                      ? globalstyles.viewredtext
                      : globalstyles.viewgreentext
                  }>
                  {' '}
                  {status}{' '}
                </Text>
              </View>
            </View>
            <View style={globalstyles.lastviewcont2}>
              <TouchableOpacity onPress={toggleModal}>
                <Image source={require('../../assets/View.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal2}>
                <Image source={require('../../assets/Edit.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={globalstyles.viewcont}>
            <View style={globalstyles.viewimgcont}>
              <Image style={globalstyles.viewimg} source={src} />
              <ScrollView>
                <Text style={globalstyles.viewnametext}> {name} </Text>
                <Text style={globalstyles.viewnametext2}> {type} </Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewtextcont}>
              <ScrollView>
                <Text style={globalstyles.viewnametext3}> {branch} </Text>

                <Text style={globalstyles.viewnametext2}>{time}</Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewbtncont}>
              <View
                style={
                  status === 'Schedule'
                    ? globalstyles.viewredbtn
                    : globalstyles.viewgreenbtn
                }>
                <Text
                  style={
                    status === 'Schedule'
                      ? globalstyles.viewredtext
                      : globalstyles.viewgreentext
                  }>
                  {' '}
                  {status}{' '}
                </Text>
              </View>
            </View>
            <View style={globalstyles.lastviewcont2}>
              <TouchableOpacity onPress={toggleModal}>
                <Image source={require('../../assets/View.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal2}>
                <Image source={require('../../assets/Edit.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={globalstyles.viewcont}>
            <View style={globalstyles.viewimgcont}>
              <Image style={globalstyles.viewimg} source={src} />
              <ScrollView>
                <Text style={globalstyles.viewnametext}> {name} </Text>
                <Text style={globalstyles.viewnametext2}> {type} </Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewtextcont}>
              <ScrollView>
                <Text style={globalstyles.viewnametext3}> {branch} </Text>

                <Text style={globalstyles.viewnametext2}>{time}</Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewbtncont}>
              <View
                style={
                  status === 'Pendingg'
                    ? globalstyles.viewredbtn
                    : globalstyles.viewgreenbtn
                }>
                <Text
                  style={
                    status === 'Pendingg'
                      ? globalstyles.viewredtext
                      : globalstyles.viewgreentext
                  }>
                  {' '}
                  {status}{' '}
                </Text>
              </View>
            </View>
            <View style={globalstyles.lastviewcont2}>
              <TouchableOpacity onPress={toggleModal}>
                <Image source={require('../../assets/View.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal2}>
                <Image source={require('../../assets/Edit.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={globalstyles.modal}>
          <Text style={globalstyles.modaltextmain}>Scheduled Appointment</Text>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Appointee</Text>
            <Text style={globalstyles.simpletext}>{appointee}</Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Case#</Text>
            <Text style={globalstyles.simpletext}>{casee}</Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Date</Text>
            <Text style={globalstyles.simpletext}> {date} </Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Time</Text>
            <Text style={globalstyles.simpletext}>{time}</Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Status</Text>
            <Text
              style={
                status === 'Closed'
                  ? globalstyles.modalredtext
                  : globalstyles.modalgreentext
              }>
              {status}
            </Text>
          </View>
          <TouchableOpacity style={globalstyles.modalbtn} onPress={toggleModal}>
            <Text style={globalstyles.simpletext}>Okay</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={isModalVisible2}>
        <View style={globalstyles.modal}>
          <Text style={globalstyles.modaltextmain}>Update Appointment</Text>
          <View style={globalstyles.inputcont}>
            <Text style={globalstyles.simpletext}>Document Name</Text>
            <TextInput
              placeholder="Enter Document Name"
              placeholderTextColor="#626262"
              style={globalstyles.input}
            />
          </View>

          <TouchableOpacity style={styles.buttonStyle} onPress={selectOneFile}>
            <Text style={{marginRight: 10, fontSize: 19, color: 'grey'}}>
              {fileName ? fileName : 'Click here to upload file'}
            </Text>
            <Image
              source={{
                uri: 'https://img.icons8.com/offices/40/000000/attach.png',
              }}
              style={styles.imageIconStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={globalstyles.modalbtn}
            onPress={toggleModal2}>
            <Text style={globalstyles.simpletext}>Okay</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    marginTop: responsiveHeight(4),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 5,
    borderColor: 'grey',
    borderWidth: 1,
    minheight: 45,
    justifyContent: 'space-around',
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
});
