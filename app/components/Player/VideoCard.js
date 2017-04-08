import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Card, CardItem } from 'native-base';

const minHeight = 200;

class VideoCard extends Component {
    render() {
        return(
            <Card minHeight={minHeight}>
                <CardItem>
                    <Text>Card</Text>
                </CardItem>
            </Card>
        );
    }
}

export default VideoCard;