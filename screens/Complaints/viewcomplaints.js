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

export default function Viewcomplaints(props) {
  const [name, setName] = useState('Salman');
  const [type, setType] = useState('Social Worker');
  const [title, setTitle] = useState('Money');
  const [description, setDescription] = useState('Need Money to Shelter Home');
  const [status, setStatus] = useState('Pending');
  const [src, setSrc] = useState(require('../../assets/111.jpg'));
  const [date, setDate] = useState('12-3-2023');
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
            View Complaints
          </Text>
          <Text style={globalstyles.whitetextdash}>
            View list of all complaints scheduled{' '}
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
                <Text style={globalstyles.viewnametext3}> {title} </Text>
                <Text style={globalstyles.viewnametext2}>{description}</Text>
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
                <Text style={globalstyles.viewnametext3}> {title} </Text>
                <Text style={globalstyles.viewnametext2}>{description}</Text>
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
                <Text style={globalstyles.viewnametext3}> {title} </Text>
                <Text style={globalstyles.viewnametext2}>{description}</Text>
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
                <Text style={globalstyles.viewnametext3}> {title} </Text>
                <Text style={globalstyles.viewnametext2}>{description}</Text>
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
                <Text style={globalstyles.viewnametext3}> {title} </Text>
                <Text style={globalstyles.viewnametext2}>{description}</Text>
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
                <Text style={globalstyles.viewnametext3}> {title} </Text>
                <Text style={globalstyles.viewnametext2}>{description}</Text>
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
          <Text style={globalstyles.modaltextmain}>Complaint</Text>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Employee Type</Text>
            <Text style={globalstyles.simpletext}>{type}</Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Name</Text>
            <Text style={globalstyles.simpletext}>{name}</Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Issue Date</Text>
            <Text style={globalstyles.simpletext}> {date} </Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Issue Title</Text>
            <Text style={globalstyles.simpletext}>{title}</Text>
          </View>
          <View style={globalstyles.modaltextcont}>
            <Text style={globalstyles.viewnametext}>Issue description</Text>
            <Text style={globalstyles.simpletext}>{description}</Text>
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
