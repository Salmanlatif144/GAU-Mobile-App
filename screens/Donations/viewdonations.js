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

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Modal from 'react-native-modal';

export default function Viewdonations() {
  const [name, setName] = useState('Salman');
  const [type, setType] = useState('Social Worker');
  const [branch, setbranch] = useState('Branch 1');
  const [amount, setamount] = useState('$15000');
  const [time, settime] = useState('12:30');
  const [status, setStatus] = useState('Pending');
  const [src, setSrc] = useState(require('../../assets/111.jpg'));
  const [date, setDate] = useState('12-3-2023');
  const [totalamount, setTotalamount] = useState('25000');
  const [cvc, setCvc] = useState('1234-858-985');
  const [expiration, setExpiration] = useState('12-3-2023');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
                <Text style={globalstyles.viewgreentext}> {amount} </Text>
                <Text style={globalstyles.viewnametext2}>{time}</Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewbtncont}>
              <View
                style={
                  status === 'Pending'
                    ? globalstyles.viewredbtn
                    : globalstyles.viewgreenbtn
                }>
                <Text
                  style={
                    status === 'Pending'
                      ? globalstyles.viewredtext
                      : globalstyles.viewgreentext
                  }>
                  {' '}
                  {status}{' '}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={globalstyles.lastviewcont}
              onPress={toggleModal}>
              <Image source={require('../../assets/View.png')} />
            </TouchableOpacity>
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
                <Text style={globalstyles.viewgreentext}> {amount} </Text>

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
            <TouchableOpacity
              style={globalstyles.lastviewcont}
              onPress={toggleModal}>
              <Image source={require('../../assets/View.png')} />
            </TouchableOpacity>
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
                <Text style={globalstyles.viewgreentext}> {amount} </Text>
                <Text style={globalstyles.viewnametext2}>{time}</Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewbtncont}>
              <View
                style={
                  status === 'Pending'
                    ? globalstyles.viewredbtn
                    : globalstyles.viewgreenbtn
                }>
                <Text
                  style={
                    status === 'Pending'
                      ? globalstyles.viewredtext
                      : globalstyles.viewgreentext
                  }>
                  {' '}
                  {status}{' '}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={globalstyles.lastviewcont}
              onPress={toggleModal}>
              <Image source={require('../../assets/View.png')} />
            </TouchableOpacity>
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
                <Text style={globalstyles.viewgreentext}> {amount} </Text>

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
            <TouchableOpacity
              style={globalstyles.lastviewcont}
              onPress={toggleModal}>
              <Image source={require('../../assets/View.png')} />
            </TouchableOpacity>
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
                <Text style={globalstyles.viewgreentext}> {amount} </Text>
                <Text style={globalstyles.viewnametext2}>{time}</Text>
              </ScrollView>
            </View>
            <View style={globalstyles.viewbtncont}>
              <View
                style={
                  status === 'Pending'
                    ? globalstyles.viewredbtn
                    : globalstyles.viewgreenbtn
                }>
                <Text
                  style={
                    status === 'Pending'
                      ? globalstyles.viewredtext
                      : globalstyles.viewgreentext
                  }>
                  {' '}
                  {status}{' '}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={globalstyles.lastviewcont}
              onPress={toggleModal}>
              <Image source={require('../../assets/View.png')} />
            </TouchableOpacity>
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
                <Text style={globalstyles.viewgreentext}> {amount} </Text>

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
            <TouchableOpacity
              style={globalstyles.lastviewcont}
              onPress={toggleModal}>
              <Image source={require('../../assets/View.png')} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={globalstyles.modal}>
          <Text style={globalstyles.modaltextmain}>Donations</Text>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Amount</Text>
            <Text style={globalstyles.simpletext}>{totalamount}</Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Name</Text>
            <Text style={globalstyles.simpletext}>{name}</Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>CVC</Text>
            <Text style={globalstyles.simpletext}> {cvc} </Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Expiration</Text>
            <Text style={globalstyles.simpletext}>{expiration}</Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Paid Amount</Text>
            <Text style={globalstyles.modalgreentext}>{amount}</Text>
          </View>
          <TouchableOpacity style={globalstyles.modalbtn} onPress={toggleModal}>
            <Text style={globalstyles.simpletext}>Okay</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
