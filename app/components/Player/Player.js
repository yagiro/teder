import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import VideoPlayer from './VideoPlayer';

export default class Player extends Component {
    render() {
        return(
            <Container style={{backgroundColor:'white'}}>
                <VideoPlayer flex={3}></VideoPlayer>
                <View flex={5}></View>
            </Container>
        );
    }
}