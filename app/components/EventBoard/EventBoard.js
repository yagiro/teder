import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { connect } from 'react-redux';
import ImageCard from '../ImageCard';

let key = 0; // todo: make something serious

class EventBoard extends Component {
    render() {
        return(
            <Container>
                <Content>
                    <Button rounded info onPress={this.props.addEvent}><Text>Add</Text></Button>
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

const mapStateToProps = state => ({
    events: state.events
});

const mapDispatchToProps = dispatch => ({
    addEvent: () => dispatch({ type: 'ADD_EVENT', event: 99 })
});

export default connect(mapStateToProps,mapDispatchToProps)(EventBoard);