import { TAB_CHANGED } from '../consts';

const initialState = {
    activeTab: 0,
    events: [],
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return Object.assign({}, state, {
                events: state.events.concat(action.event)
            });
            break;
        case TAB_CHANGED:
            return Object.assign({}, state, {
                activeTab: action.payload.to
            });
            break;
        default:
            return state;
    }
};

export default mainReducer;