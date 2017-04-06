import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Tabs, Tab } from 'native-base';
import { Provider } from 'react-redux';
import EventBoard from './components/EventBoard/EventBoard';
import Player from './components/Player/Player';
import Magazine from './components/Magazine/Magazine';
import store from './store';

export default class App extends Component {
    render() {
        return(
            <Provider store={ store }>
                <Container>
                    <Tabs>
                        <Tab heading="Player">
                            <Player></Player>
                        </Tab>
                        <Tab heading="Magazine">
                            <Magazine></Magazine>
                        </Tab>
                        <Tab heading="Events">
                            <EventBoard></EventBoard>
                        </Tab>
                    </Tabs>
                </Container>
            </Provider>
        );
    }
}