import { TAB_CHANGED } from '../consts';

const initialState = {
    activeTab: 0,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TAB_CHANGED:
            return Object.assign({}, state, {
                activeTab: action.payload.to
            });
            break;
        default:
            return state;
    }
};

export default appReducer;