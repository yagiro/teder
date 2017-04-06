const initialState = {
    events: []
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return Object.assign({}, state, {
                events: state.events.concat(action.event)
            });
            break;
        default:
            return state;
    }
};

export default mainReducer;