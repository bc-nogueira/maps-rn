import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends Component {
  render() {
    return (
      <MapView
        style={ styles.map }
        initialRegion={{
          latitude: -22.905837,
          longitude: -43.133239,
          // Acho que os deltas determinam a distância do zoom
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
