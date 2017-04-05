import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from 'native-base';

export default class EventBoard extends Component {
    render() {
        return(
            <Container>
                <Text style={{fontSize:50}}>
                    Event Board
                </Text>
            </Container>
        );
    }
}