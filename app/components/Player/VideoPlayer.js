import React, { Component } from 'react';
import Video from 'react-native-video';

export default class VideoPlayer extends Component {
    render() {
        return(
            <Video  source={require('./broadchurch.mp4')}
                    ref={ref => this.player = ref }
                    rate={1.0}
                    resizeMode='contain'
                    paused={false}
                    muted={true}
                    controls={true}
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