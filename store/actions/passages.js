import { FETCH_PASSAGES_ITEMS } from '../types';

export function fetchPassagesItemsRequest(page) {
    return {
        type: FETCH_PASSAGES_ITEMS.REQUEST,
        payload: { page },
    };
}
export function fetchPassagesItemsSucceed(items) {
    return {
        type: FETCH_PASSAGES_ITEMS.SUCCESS,
        payload: items,
    };
}
export function fetchPassagesItemsFailed(error) {
    return {
        type: FETCH_PASSAGES_ITEMS.FAIL,
        payload: error,
    };
}
