import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';
import ImageCard from '../ImageCard';

export default class EventBoard extends Component {
    render() {
        return(
            <Container>
                <Content>
                    <ImageCard></ImageCard>
                    <ImageCard></ImageCard>
                    <ImageCard></ImageCard>
                    <ImageCard></ImageCard>
                    <ImageCard></ImageCard>
                    <ImageCard></ImageCard>
                </Content>
            </Container>
        );
    }
}