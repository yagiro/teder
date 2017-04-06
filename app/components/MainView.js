import React from 'react';
import { Text } from 'react-native';
import { Container, Tabs, Tab } from 'native-base';
import EventBoard from './EventBoard/EventBoard';
import Player from './Player/Player';
import Magazine from './Magazine/Magazine';
import { createStore } from 'redux';

export default class MainView extends React.Component {
    render() {
        return(
            <Container>
                <Tabs>
                    <Tab heading="Player">
                        <Player></Player>
                    </Tab>
                    <Tab heading="Magazine">
                        <Magazine></Magazine>
                    </Tab>
                    <Tab heading="Events">
                        <EventBoard events={[1,2,3,4,5,6]}></EventBoard>
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}