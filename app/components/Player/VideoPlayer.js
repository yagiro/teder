import React, { Component, PropTypes } from 'react';
import Video from 'react-native-video';

export default class VideoPlayer extends Component {
    render() {
        return(
            <Video  source={require('./broadchurch.mp4')}
                    ref={ref => { this.player = ref; console.log(this.player); } }
                    rate={0.0}
                    resizeMode='contain'
                    paused={true}
                    muted={false}
                    controls={ true }
                    onError={e => e }
                    onLoadStart={e => e}
                    onLoad={e => e}
                    style={{
                        flex: this.props.flex || 1,
                    }}>
            </Video>
        );
    }
}

VideoPlayer.propTypes = {
    flex: PropTypes.number,
};