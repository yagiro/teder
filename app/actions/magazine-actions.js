import { ARTICLE_ENTER, ARTICLE_LEAVE } from '../consts';

export const enterArticle = id => ({
    type: ARTICLE_ENTER,
    payload: { id }
});

export const leaveArticle = () => ({
    type: ARTICLE_LEAVE
});