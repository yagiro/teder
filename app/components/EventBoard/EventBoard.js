import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content } from 'native-base';
import ImageCard from '../ImageCard';

let key = 0;

export default class EventBoard extends Component {
    render() {
        return(
            <Container>
                <Content>
                    { this.props.events.map(
                        e => <ImageCard key={++key}></ImageCard>) }
                </Content>
            </Container>
        );
    }
}

EventBoard.propTypes = {
    events: React.PropTypes.array
};