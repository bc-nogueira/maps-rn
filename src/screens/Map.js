import React, { Component } from 'react';
import { Alert, StyleSheet } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default class App extends Component {
    static navigationOptions = {
        title: 'Map',
    };

    constructor(props) {
        super(props);
        this.state = {
            // markers: [],
            // Roraima
            origin: {
                latitude: 2.8235,
                longitude: -60.6758,
            },
            // Porto Alegre
            destination: {
                latitude: -30.0277,
                longitude: -51.2287,
            },
            apikey: 'AIzaSyAxFARM9NrPcw8lyIsFrwPRrG1v5kdaKL4'
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
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: true }
        )
    }

    render() {
        return (
            <MapView
                style={styles.container}
                initialRegion={{
                    latitude: -14,
                    longitude: -55,
                    // Deltas determinam a distância do zoom
                    latitudeDelta: 45,
                    longitudeDelta: 45,
                }}
            >
                <Marker coordinate={this.state.origin} title="Origem" />
                <Marker coordinate={this.state.destination} title="Destino" />
                <MapViewDirections
                    origin={this.state.origin}
                    destination={this.state.destination}
                    apikey={this.state.apikey}
                    strokeWidth={5}
                    strokeColor="green"
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
