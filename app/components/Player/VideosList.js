import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base';
import VideoCard from './VideoCard';

class VideosList extends Component {
    render() {
        return(
            <Container style={{flex:1}}>
                <Content>
                    <VideoCard></VideoCard>
                    <VideoCard></VideoCard>
                    <VideoCard></VideoCard>
                    <VideoCard></VideoCard>
                </Content>
            </Container>
        );
    }
}

export default VideosList;