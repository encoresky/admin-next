import { FETCH_PROBLEMS_ITEMS } from '../types';

export function fetchProblemsItemsRequest(page) {
    return {
        type: FETCH_PROBLEMS_ITEMS.REQUEST,
        payload: { page },
    };
}
export function fetchProblemsItemsSucceed(items) {
    return {
        type: FETCH_PROBLEMS_ITEMS.SUCCESS,
        payload: items,
    };
}
export function fetchProblemsItemsFailed(error) {
    return {
        type: FETCH_PROBLEMS_ITEMS.FAIL,
        payload: error,
    };
}
