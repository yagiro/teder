import { ARTICLE_ENTER, ARTICLE_LEAVE } from '../consts';

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
        case ARTICLE_LEAVE:
            return Object.assign({}, state, {
                isArticleMode: false,
                articleId: null
            });
            break;
        default:
            return state;
    }
};

export default magazineReducer;