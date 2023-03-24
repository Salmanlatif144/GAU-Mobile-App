import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {globalstyles} from '../stylesheet';
import * as Progress from 'react-native-progress';
import {LineChart} from 'react-native-chart-kit';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export default function Donations() {
  const [donation, setdonation] = useState(100);
  const [received, setreceived] = useState(23);

  const [progress, setProgress] = useState(0.9);
  const progressText = progress * 100;
  const [receivedprogress, setComplaintProgress] = useState(0.4);
  const ComplaimtText = receivedprogress * 100;
  // charts configurations
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    fillShadowGradientFrom: '#3268A7',
    fillShadowGradientTo: '#3268A7',

    color: () => `#e8e8e8`,
    labelColor: () => `grey`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '1',
    },
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'oct'],
    datasets: [
      {
        data: [20, 90, 28, 80, 5, 43, 90, 21, 45],
        color: () => `#4379EE`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };
  return (
    <View style={globalstyles.bluecont}>
      <View style={globalstyles.rowcont}>
        <View style={globalstyles.col1}>
          <Image
            source={require('../assets/logo.png')}
            style={globalstyles.logo}
          />
          <TouchableOpacity>
            <Image
              source={require('../assets/drawer.png')}
              style={globalstyles.drawericon}
            />
          </TouchableOpacity>
        </View>

        <View style={globalstyles.coldash}>
          <Text style={globalstyles.bigwhitetextdash}>
            {' '}
            <Image
              source={require('../assets/cloud.png')}
              style={globalstyles.icons}
            />{' '}
            Dashboard
          </Text>
          <Text style={globalstyles.whitetextdash}>
            ou can view all the satistical graphs and data here
          </Text>
        </View>
        <View style={globalstyles.col3}>
          <Image
            source={require('../assets/cloud.png')}
            style={globalstyles.iconl}
          />
          <Image
            source={require('../assets/cloud.png')}
            style={globalstyles.icons}
          />
        </View>
      </View>
      <ScrollView style={globalstyles.whitecont2}>
        <View style={globalstyles.dashcard2}>
          <View style={globalstyles.cardminicont}>
            <View style={globalstyles.cardpiccont}>
              <Text style={globalstyles.cardsimpletext}>Pending Donations</Text>
              <Image source={require('../assets/green.png')} />
            </View>
            <Text style={globalstyles.cardboldtext}>{donation}</Text>
            <View>
              <Text style={globalstyles.progresstext}>{progressText}%</Text>
              <Progress.Bar
                progress={progress}
                width={200}
                height={7}
                color={'green'}
                unfilledColor={'#d3e0d3'}
              />
              <Text style={globalstyles.cardsmalltext}>Response Rate</Text>
            </View>
          </View>
        </View>
        <View style={globalstyles.dashcard2}>
          <View style={globalstyles.cardminicont}>
            <View style={globalstyles.cardpiccont}>
              <Text style={globalstyles.cardsimpletext}>
                Recieved Donations
              </Text>
              <Image source={require('../assets/red.png')} />
            </View>
            <Text style={globalstyles.cardboldtext}>{received}</Text>
            <View>
              <Text style={globalstyles.progresstext}>{ComplaimtText}%</Text>
              <Progress.Bar
                progress={receivedprogress}
                width={200}
                height={7}
                color={'#CF1E1C'}
                unfilledColor={'#fad8d7'}
              />
              <Text style={globalstyles.cardsmalltext}>Response Rate</Text>
            </View>
          </View>
        </View>
        <View style={globalstyles.graphcont}>
          <LineChart
            withInnerLines={true}
            data={data}
            width={responsiveScreenWidth(95)}
            height={responsiveHeight(20)}
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,

              backgroundColor: 'blue',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
