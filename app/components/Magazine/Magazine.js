import React, { Component, PropTypes } from 'react';
import { Text, View, WebView } from 'react-native';
import { Button, Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { enterArticle, leaveArticle } from '../../actions/magazine-actions';

class Magazine extends Component {
    render() {
        let { isArticleMode, enterArticle, leaveArticle } = this.props;

        return(
            <Container>
                {
                    isArticleMode ?
                        <View style={{flex:1}}>
                            <Button onPress={ e => leaveArticle() }><Text>Back</Text></Button>
                            <WebView    source={{uri:'http://teder.fm/mag/998'}}
                                        style={{flex:1}}></WebView>
                        </View>
                        :
                        <Content>
                            <Button onPress={ e => enterArticle('someArticleId') }><Text>Read</Text></Button>
                        </Content>
                }
            </Container>
        );
    }
}

Magazine.propTypes = {
    isArticleMode: PropTypes.bool
};

const mapStateToProps = state => ({
    isArticleMode: state.magazine.isArticleMode
});

export default connect(mapStateToProps, { enterArticle, leaveArticle })(Magazine);