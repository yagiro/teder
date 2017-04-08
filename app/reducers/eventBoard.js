const initialState = {
    events: []
};

const eventBoardReducer = (state = initialState, action) => {
    console.log('eventboard state', state);
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

export default eventBoardReducer;