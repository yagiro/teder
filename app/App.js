import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Tabs, Tab } from 'native-base';
import { Provider } from 'react-redux';
import EventBoard from './components/EventBoard/EventBoard';
import Player from './components/Player/Player';
import Magazine from './components/Magazine/Magazine';
import store from './store';
import { tabChanged } from './actions/app-actions'
// const strings = require('./strings/strings.en.json'); // todo: get the path from config file

export default class App extends Component {
    render() {
        return(
            <Provider store={ store }>
                <Container>
                    <Tabs onChangeTab={data => store.dispatch(tabChanged(data.from, data.i))}>
                        <Tab heading="Player">
                            <Player tabId={0}></Player>
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