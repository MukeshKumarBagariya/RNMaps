// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Dimensions,
//   TouchableOpacity,
//   Platform,
// } from 'react-native';

// import MapView, {
//   ProviderPropType,
//   Marker,
//   AnimatedRegion,
// } from 'react-native-maps';

// const screen = Dimensions.get('window');

// const ASPECT_RATIO = screen.width / screen.height;
// const LATITUDE = 37.78825;
// const LONGITUDE = -122.4324;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// class AnimatedMarkers extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       coordinate: new AnimatedRegion({
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//       }),
//     };
//   }

//   animate() {
//     const { coordinate } = this.state;
//     const newCoordinate = {
//       latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
//       longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
//     };

//     if (Platform.OS === 'android') {
//       if (this.marker) {
//         this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
//       }
//     } else {
//       coordinate.timing(newCoordinate).start();
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           provider={this.props.provider}
//           style={styles.map}
//           initialRegion={{
//             latitude: LATITUDE,
//             longitude: LONGITUDE,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//           }}
//         >
//           <Marker.Animated
//             ref={marker => {
//               this.marker = marker;
//             }}
//             coordinate={this.state.coordinate}
//           />
//         </MapView>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={() => this.animate()}
//             style={[styles.bubble, styles.button]}
//           >
//             <Text>Animate</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// AnimatedMarkers.propTypes = {
//   provider: ProviderPropType,
// };

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   bubble: {
//     flex: 1,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20,
//   },
//   latlng: {
//     width: 200,
//     alignItems: 'stretch',
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginVertical: 20,
//     backgroundColor: 'transparent',
//   },
// });

// export default AnimatedMarkers;




import React, { useState, useRef, useEffect } from "react";
import { Text, View } from 'react-native';
import MapView, { AnimatedRegion, Marker, Polyline} from 'react-native-maps';

// ...

const App = () => {
  const _map = useRef(null);
  const [lat, setLat] = useState(28.43635);
  const [lon, setLon] = useState(77.11289000000001);
  const [angle, setAngle] = useState(0);
  const coordinates = [
    {latitude: 28.43635, longitude: 77.11289000000001},
    {latitude: 28.436320, longitude: 77.112895},
    {latitude: 28.436303, longitude: 77.112895},
    {latitude: 28.436248, longitude: 77.112910},
    {latitude: 28.436192, longitude: 77.112923},
    {latitude: 28.436110, longitude: 77.112933},
    {latitude: 28.436043, longitude: 77.112961},
    {latitude: 28.435948, longitude: 77.113001},
    {latitude: 28.435880, longitude: 77.113014},
    {latitude: 28.435816, longitude: 77.113026},
    {latitude: 28.435751, longitude: 77.113045},
    {latitude: 28.435698, longitude: 77.113058},
    {latitude: 28.435618, longitude: 77.113077},
    {latitude: 28.435538, longitude: 77.113100},
    {latitude: 28.435461, longitude: 77.113119},
    
    {latitude: 28.435379, longitude: 77.113140},
    {latitude: 28.435303, longitude: 77.113236},
    {latitude: 28.435298, longitude: 77.113350},
    {latitude: 28.435324, longitude: 77.113487},
    {latitude: 28.435351, longitude: 77.113692},
    {latitude: 28.435398, longitude: 77.113858},
    {latitude: 28.435438, longitude: 77.114094},
    {latitude: 28.435466, longitude: 77.114247},
    {latitude: 28.435495, longitude: 77.114401},
    {latitude: 28.435528, longitude: 77.114562},
    {latitude: 28.435535, longitude: 77.114642},
    {latitude: 28.435551, longitude: 77.114735},
    {latitude: 28.435573, longitude: 77.114822},
    {latitude: 28.435605, longitude: 77.115000},
    {latitude: 28.435556, longitude: 77.115065},
    {latitude: 28.435516, longitude: 77.115139},
    {latitude: 28.435473, longitude: 77.115211},
    {latitude: 28.435438, longitude: 77.115279},
    {latitude: 28.435404, longitude: 77.115334},
    {latitude: 28.435391, longitude: 77.115397},
    {latitude: 28.435470, longitude: 77.115419},
    {latitude: 28.435533, longitude: 77.115440},
    {latitude: 28.435591, longitude: 77.115448},
    {latitude: 28.435660, longitude: 77.115452},
    {latitude: 28.435693, longitude: 77.115381},
    {latitude: 28.435681, longitude: 77.115315},
    {latitude: 28.435665, longitude: 77.115258},
    {latitude: 28.435651, longitude: 77.115161}
]
 
const coords = [
  {latitude: 28.437732, longitude: 77.114714},
  {latitude: 28.437585, longitude: 77.114692},
  {latitude: 28.437468, longitude: 77.114759},
  {latitude: 28.437518, longitude: 77.114984},
  {latitude: 28.437537, longitude: 77.115243},
  {latitude: 28.437584, longitude: 77.115125},
  {latitude: 28.437655, longitude: 77.114895},
  {latitude: 28.437724, longitude: 77.114761},
  {latitude: 28.437670, longitude: 77.114489}
]

var i = 0;
var x = 0;
var y = 0;
var prevLat = 0;
var prevLon = 0;
  

  useEffect(() => {
    const interval = setInterval(() => {
      if( i < coordinates.length){
        x = Math.abs(prevLat - coordinates[i].latitude);
        y = Math.abs(prevLon - coordinates[i].longitude);
        if(prevLat < coordinates[i].latitude && prevLon < coordinates[i].longitude){
          setAngle(angle => (Math.atan(y/x)*180/Math.PI));
        } else {
          if(prevLat >= coordinates[i].latitude && prevLon < coordinates[i].longitude){
            setAngle(angle => (90 - (Math.atan(y/x)*180/Math.PI) + 90));
          } else if (prevLat >= coordinates[i].latitude && prevLon >= coordinates[i].longitude){
            setAngle(angle => ((Math.atan(y/x)*180/Math.PI) + 180));
          } else if(prevLat < coordinates[i].latitude && prevLon >= coordinates[i].longitude){
            setAngle(angle => (90 - (Math.atan(y/x)*180/Math.PI) + 270));
          }
        }
        setLat(lat => coordinates[i].latitude);
        setLon(lon => coordinates[i].longitude);
        prevLat = coordinates[i].latitude;
        prevLon = coordinates[i].longitude;
        i++;
        console.log(angle);
      }           
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <MapView
        style={{ flex: 1 }}
        ref={_map}
        initialRegion= {{
          latitude: 28.43635,
          longitude: 77.11289000000001,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker.Animated 
          style={{ transform: [{ rotate: angle.toString().concat('deg') }]}} 
          coordinate={{latitude: lat, longitude: lon}}
          duration = {500}
          image = {require('./assets/ic_car.png')}  >
        </Marker.Animated>
        <Polyline coordinates={coordinates} 
        strokeWidth={2}
        />
      </MapView>
    </>
  );
};

export default App;

// import React, { useState, useRef, useEffect } from "react";
// import { Text, View } from 'react-native';
// import Mapview, { AnimatedRegion, Marker } from 'react-native-maps';


// class App extends React.Component {

//   getInitialState() {
//     return {
//       coordinate: new AnimatedRegion({
//         latitude: 28.43635,
//         longitude: 77.11289000000001,
//       }),
//     };
//   }
  
//   componentWillReceiveProps(nextProps) {
//     const duration = 500
  
//     if (this.props.coordinate !== nextProps.coordinate) {
//       if (Platform.OS === 'android') {
//         if (this.marker) {
//           this.marker.animateMarkerToCoordinate(
//             nextProps.coordinate,
//             duration
//           );
//         }
//       }
//     }
//   }

//     coordinates = [
//     {latitude: 28.43635, longitude: 77.11289000000001},
//     {latitude: 28.436320, longitude: 77.112895},
//     {latitude: 28.436303, longitude: 77.112895},
//     {latitude: 28.436248, longitude: 77.112910},
//     {latitude: 28.436192, longitude: 77.112923},
//     {latitude: 28.436110, longitude: 77.112933},
//     {latitude: 28.436043, longitude: 77.112961},
//     {latitude: 28.435948, longitude: 77.113001},
//     {latitude: 28.435880, longitude: 77.113014},
//     {latitude: 28.435816, longitude: 77.113026},
//     {latitude: 28.435751, longitude: 77.113045},
//     {latitude: 28.435698, longitude: 77.113058},
//     {latitude: 28.435618, longitude: 77.113077},
//     {latitude: 28.435538, longitude: 77.113100},
//     {latitude: 28.435461, longitude: 77.113119},
//     {latitude: 28.435379, longitude: 77.113140},
//     {latitude: 28.435303, longitude: 77.113236},
//     {latitude: 28.435298, longitude: 77.113350},
//     {latitude: 28.435324, longitude: 77.113487},
//     {latitude: 28.435351, longitude: 77.113692},
//     {latitude: 28.435398, longitude: 77.113858},
//     {latitude: 28.435438, longitude: 77.114094},
//     {latitude: 28.435466, longitude: 77.114247},
//     {latitude: 28.435495, longitude: 77.114401},
//     {latitude: 28.435528, longitude: 77.114562},
//     {latitude: 28.435535, longitude: 77.114642},
//     {latitude: 28.435551, longitude: 77.114735},
//     {latitude: 28.435573, longitude: 77.114822},
//     {latitude: 28.435605, longitude: 77.115000},
//     {latitude: 28.435556, longitude: 77.115065},
//     {latitude: 28.435516, longitude: 77.115139},
//     {latitude: 28.435473, longitude: 77.115211},
//     {latitude: 28.435438, longitude: 77.115279},
//     {latitude: 28.435404, longitude: 77.115334},
//     {latitude: 28.435391, longitude: 77.115397},
//     {latitude: 28.435470, longitude: 77.115419},
//     {latitude: 28.435533, longitude: 77.115440},
//     {latitude: 28.435591, longitude: 77.115448},
//     {latitude: 28.435660, longitude: 77.115452},
//     {latitude: 28.435693, longitude: 77.115381},
//     {latitude: 28.435681, longitude: 77.115315},
//     {latitude: 28.435665, longitude: 77.115258},
//     {latitude: 28.435651, longitude: 77.115161}
// ]


//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     coordinate: new AnimatedRegion({
//   //       latitude: 28.435651,
//   //       longitude: 77.115161,
//   //     }),
//   //   }
//   // }
//   // tick() {
//   //   this.setState(state => ({
//   //     coordinate: new AnimatedRegion({
//   //       latitude: 28.435665,
//   //       longitude: 77.115258,
//   //     }),
//   //   }));
//   //   console.log(this.state.coordinate)
//   // }

//   // componentDidMount() {
//   //   this.interval = setInterval(() => this.tick(), 1000);
//   // }

//   // componentWillUnmount() {
//   //   clearInterval(this.interval);
//   // }

//   render() {
//     return (
//       <Mapview initialRegion={{
//         latitude: 28.43635,
//         longitude: 77.11289000000001,
//         latitudeDelta: 0.1,
//         longitudeDelta: 0.1,
//       }}>
//       <Marker
//         animateMarkerToCoordinate = {{
//           coordinate: {latitude: 28.436320, longitude: 77.112895},
//           duration: 1000
//         }}
//         ref={marker => { this.marker = marker }}
//         coordinate={{latitude: 28.436320, longitude: 77.112895}}
//       />
//     </Mapview>  
//     ) 
//   }
// }

// export default App;
