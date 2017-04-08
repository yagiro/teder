import { ARTICLE_ENTER } from '../consts';

const initialState = {
    isArticleMode: false,
    articleId: null
};

const magazineReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARTICLE_ENTER:
            return Object.assign({}, state, {
                isArticleMode: true,
                articleId: action.id
            });
            break;
        default:
            return state;
    }
};

export default magazineReducer;