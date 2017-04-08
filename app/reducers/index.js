import { TAB_CHANGED } from '../consts';
import app from './app';
import magazine from './magazine';
import eventBoard from './eventBoard';

const mainReducer = (state = {}, action) => {
    return {
        app: app(state.app, action),
        magazine: magazine(state.magazine, action),
        eventBoard: eventBoard(state.eventBoard, action)
    };
};

export default mainReducer;