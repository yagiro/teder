import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';
import VideoPlayer from './VideoPlayer';
import { connect } from 'react-redux';

class Player extends Component {
    render() {
        return(
            <Container style={{backgroundColor:'white'}}>
                {
                    !this.props.isActiveTab ? null :
                    <VideoPlayer flex={3}></VideoPlayer>                    
                }
                <View flex={5}>
                    <Text>{ this.props.isActiveTab ? 'active': ''}</Text>
                </View>
            </Container>
        );
    }
}

Player.propTypes = {
    tabId: PropTypes.any.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    isActiveTab: state.activeTab === ownProps.tabId
});

export default connect(mapStateToProps,null)(Player);