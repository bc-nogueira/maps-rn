import React, {Component} from 'react';
import {Alert, StyleSheet} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // markers: [],
      coordinate: {
        latitude: -22.905837,
        longitude: -43.133239,
      }
    }
  }

  handlePress = (e) => {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate
        }
      ]
    });
  }

  // Mantenho essa função aqui caso eu precise depurar
  exibeAlerta = (msg) => {
    Alert.alert(
      'Mensagem',
      `${msg}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      { cancelable: true }
    )
  }

  render() {
    return (
      <MapView
        style={ styles.container }
        initialRegion={{
          latitude: -22.905837,
          longitude: -43.133239,
          // Deltas determinam a distância do zoom
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // onPress={e => this.handlePress(e)}
      >
        {/* {this.state.markers.map((marker, i) => {
          return <Marker {...marker} key={i} />
        })} */}
        <Marker
          coordinate={this.state.coordinate}
          title="Teste"
          description="Testando"
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
