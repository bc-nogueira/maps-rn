import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';
import moment from 'moment';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button title="Abrir Mapa" onPress={() => navigate('Map', {
                inicioTimer: moment().valueOf()
            })} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
