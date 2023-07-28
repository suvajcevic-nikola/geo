// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, View } from "react-native";
import MapboxGL from "@rnmapbox/maps";

// const TripViewer = ({ coordinates }) => {
//   return (
//     <MapboxGL.MapView style={{ flex: 1 }}>
//       <MapboxGL.Camera
//         zoomLevel={12}
//         centerCoordinate={coordinates[0]}
//         animationMode="flyTo"
//         animationDuration={2000}
//       />

//       <MapboxGL.ShapeSource id="tripSource" shape={{ type: 'LineString', coordinates }}>
//         <MapboxGL.LineLayer id="tripLayer" style={{ lineColor: 'red', lineWidth: 3 }} />
//       </MapboxGL.ShapeSource>
//     </MapboxGL.MapView>
//   );
// };

export default function App() {
  const coordinates = [
    // Provide your recorded trip coordinates here
    // Each coordinate should be an array with [longitude, latitude] values
    [-122.4324, 37.78825],
    // Add more coordinates as needed
  ];

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  // return <TripViewer coordinates={coordinates} />;
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
