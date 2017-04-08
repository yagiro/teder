import { TAB_CHANGED } from '../consts';

export const tabChanged = (from, to) => ({
    type: TAB_CHANGED,
    payload: { from, to }
});